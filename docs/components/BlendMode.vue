<template>
    <div class="container">
        <!-- Select -->
        <div class="select-box">
            <div class="select-title">请选择混合模式</div>
            <el-select v-model="mode"  placeholder="请选择混合模式" @change="modeChange">
                <el-option
                    v-for="item in blend_modes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select> 
            <p> <strong>{{ state.selected.value }} 模式 :</strong> {{ state.selected.desc }}</p>         
        </div>
        <!-- Effect -->
        <div class="effect-box">
            <template v-if="type==='background'">
                <div class="box" :style="{'background-blend-mode': state.selected.value}"></div>
            </template>
            <template v-else="type==='mix'">
                <div class="circles">
                    <div :class="['c', 'circle1',state.selected.value]"></div>
                    <div :class="['c', 'circle2',state.selected.value]"></div>
                    <div :class="['c', 'circle3',state.selected.value]"></div>e
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, readonly, onMounted } from 'vue'

type Option = {
    label: string
    value: string
    desc: string
}
const blend_modes = ref(
     [
    {
        label: 'normal',
        value: 'normal',
        desc: '最终颜色永远是顶层颜色，无论底层颜色是什么。 其效果类似于两张不透明的纸重叠（overlapping）在一起。'
    },
    {
        label: 'multiply',
        value: 'multiply',
        desc: '最终颜色为顶层颜色与底层颜色相乘的结果。 如果叠加黑色层，则最终层必为黑色层，叠加白色层不会造成变化。 其效果类似于在透明薄膜上重叠印刷的两个图像。'
    },
    {
        label: 'screen',
        value: 'screen',
        desc: '最终的颜色是反转顶层颜色和底层颜色，将反转后的两个颜色相乘，再反转相加得到的和得到的结果。 黑色层不会造成变化，白色层导致白色最终层。 其效果类似于（被投影仪）投射到投影屏幕上的两个图像。'
    },
    {
        label: 'overlay',
        value: 'overlay',
        desc: '如果底层颜色比顶层颜色深，则最终颜色是 multiply 的结果，如果底层颜色比顶层颜色浅，则最终颜色是 screen 的结果。 此混合模式相当于顶层与底层互换后的 hard-light。'
    },
    {
        label: 'darken',
        value: 'darken',
        desc: '最终颜色是由每个颜色通道下，顶底两层颜色中的最暗值所组成的颜色。'
    },
    {
        label: 'lighten',
        value: 'lighten',
        desc: '最终颜色是每个颜色通道下，顶底两层颜色中的最亮值所组成的颜色。'
    },
    {
        label: 'color-dodge',
        value: 'color-dodge',
        desc: '最终颜色是将底部颜色除以顶部颜色的反色的结果。 黑色前景不会造成变化。前景如果是背景的反色，会得到白色（fully lit color，完全亮起的颜色，应当为白色）。 此混合模式类似于 screen，但是，前景只需要和背景的反色一样亮，最终图像就会变为全白。'
    },
    {
        label: 'color-burn',
        value: 'color-burn',
        desc: '最终颜色是反转底部颜色，将反转后的值除以顶部颜色，再反转除以后的值得到的结果。 白色的前景不会导致变化，前景如果是背景的反色，会得到黑色。 此混合模式类似于 multiply，但是，前景只需要和背景的反色一样暗，最终图像就会变为全黑。'
    },
    {
        label: 'hard-light',
        value: 'hard-light',
        desc: '如果顶层颜色比底层颜色深，则最终颜色是 multiply 的结果，如果顶层颜色比底层颜色浅，则最终颜色是 screen 的结果。 此混合模式相当于顶层与底层互换后的 overlay。 其效果类似于在背景层上（用前景层）打出一片刺眼的聚光灯。'
    },
    {
        label: 'soft-light',
        value: 'soft-light',
        desc: '最终颜色类似于 hard-light 的结果，但更加柔和一些。 此混合模式的表现类似 hard-light。 其效果类似于在背景层上（用前景层）打出一片发散的聚光灯。'
    },
    {
        label: 'difference',
        value: 'difference',
        desc: '最终颜色是 两种颜色中较浅的颜色 减去 两种颜色中较深的颜色 得到的结果。 黑色层不会造成变化，而白色层会反转另一层的颜色。'
    },
    {
        label: 'exclusion',
        value: 'exclusion',
        desc: '最终颜色类似于 difference，但对比度更低一些。 和 difference 相同，黑色层不会造成变化，而而白色层会反转另一层的颜色。'
    },
    {
        label: 'hue',
        value: 'hue',
        desc: '最终颜色由顶部颜色的色调和底部颜色的饱和度与亮度组成。'
    },
    {
        label: 'saturation',
        value: 'saturation',
        desc: '最终颜色由顶部颜色的色调和底部颜色的饱和度与发光度组成。 饱和度为零的纯灰色背景层不会造成变化。'
    },
    {
        label: 'color',
        value: 'color',
        desc: '最终颜色由顶部颜色的色调与饱和度和底部颜色的亮度组成。 此效果保留了灰度级别，可用于为前景着色。'
    },
    {
        label: 'luminosity',
        value: 'luminosity',
        desc: '最终颜色由顶部颜色的亮度和底部颜色的色调和饱和度组成。此混合模式相当于顶层与底层互换后的 color。'
    },
    {
        label: 'initial',
        value: 'initial'
    },
    {
        label: 'inherit',
        value: 'inherit'
    },
    {
        label: 'unset',
        value: 'unset'
    }
    ]
);
const props = defineProps({
    type: {
        type: String,
        default: 'background'
    }
})
const mode = ref<Option>({
    label: 'normal',
    value: 'normal',
    desc: '最终颜色永远是顶层颜色，无论底层颜色是什么。 其效果类似于两张不透明的纸重叠（overlapping）在一起。'   
});

const state = reactive({
    selected: blend_modes.value[0]
});

const modeChange = (val) => { 
    state.selected = blend_modes.value.filter(item=>item.value===val)[0] 
};

</script>

<style scoped>
.container{
    display: flex;
    .select-box{
        width: 35%;
        padding: 0 10px;
        font-size: 14px;
    }
    .effect-box{
        width: 65%;
    }
    /* Example-01 */
    .box{
        width: 100%;
        height: 300px;
        background-image: url(../assets/background_blend_mode_2.png), url(../assets/background_blend_mode_1.png);
        background-repeat: no-repeat;
        background-size: 100% 160px, 100% 100%;
        background-position: 50% bottom, center;
        background-blend-mode: multiply;
        /* filter: contrast(1.5); */
    }
    /* Example-02 */
    .circles{
        position: relative;
        width: 100%;
        height: 300px;
        border: 1px solid #fefefe;
        background-color: yellow;
        .c{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            border-radius: 50% 10%;
            transform-origin: 50px 50px;
            mix-blend-mode: difference;
        }
        .circle1{
            margin-top: -100px;
            margin-left: -35px;
            background-color: #FF0000;
        }
        .circle2{
            margin-left: -93px;
            margin-top: -65px;
            transform: rotate(35deg);
            background-color: #008000;
        }
        .circle3{
            margin-top: -45px;
            margin-left: -35px;
            transform: rotate(-80deg);
            background-color: #0000FF;
        }
        /* Fix Bug: “'blend-mode'”不在类型“CSSProperties | StyleValue[]”中 */
        .normal{
            mix-blend-mode: normal;
        }
        .multiply{
            mix-blend-mode: multiply;
        }
        .screen{
            mix-blend-mode: screen;
        }
        .overlay{
            mix-blend-mode: overlay;
        }
        .darken{
            mix-blend-mode: darken;
        }
        .lighten{
            mix-blend-mode: lighten;
        }
        .color-dodge{
            mix-blend-mode: color-dodge;
        }
        .color-burn{
            mix-blend-mode: color-burn;
        }
        .hard-light{
            mix-blend-mode: hard-light;
        }
        .soft-light{
            mix-blend-mode: soft-light;
        }
        .difference{
            mix-blend-mode: difference;
        }
        .exclusion{
            mix-blend-mode: exclusion;
        }
        .hue{
            mix-blend-mode: hue;
        }
        .saturation{
            mix-blend-mode: saturation;
        }
        .color{
            mix-blend-mode: color;
        }
        .luminosity{
            mix-blend-mode: luminosity;
        }
        .initial{
            mix-blend-mode: initial;
        }
        .inherit{
            mix-blend-mode: inherit;
        }
        .unset{
            mix-blend-mode: unset;
        }
        
    }
}
</style>