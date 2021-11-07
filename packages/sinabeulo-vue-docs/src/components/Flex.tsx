import { defineComponent, PropType } from 'vue';

interface FlexProps {
  direction?: 'horizontal' | 'vertical';
  gap?: number;
}

const Flex = defineComponent({
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      requried: false,
      default: 'horizontal',
    },
    gap: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  render() {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: this.direction === 'horizontal' ? 'row' : 'column',
          gap: `${this.gap}px`,
        }}
      >
        {this.$slots.default?.()}
      </div>
    );
  },
});

export default Flex;
export type { FlexProps };
