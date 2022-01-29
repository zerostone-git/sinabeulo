// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/scss/solid.scss';
import { createApp, defineComponent, ref } from 'vue';
import { Checkbox } from '..';
import ButtonPreview from './ButtonPreview';
import CheckboxPreview from './CheckboxPreview';
import RadioGroupPreview from './RadioGroupPreview';

const container = document.createElement('div');
document.body.appendChild(container);

const Buttons = defineComponent({
  components: { ButtonPreview, CheckboxPreview, RadioGroupPreview },
  setup() {
    const isDisabled = ref(false);

    return () => (
      <>
        <Checkbox
          label="Disabled"
          checked={isDisabled.value}
          onChange={(e?: Event, checked?: boolean): void => {
            isDisabled.value = !!checked;
          }}
        />
        <hr />
        <ButtonPreview disabled={isDisabled.value} />
        <CheckboxPreview disabled={isDisabled.value} />
        <RadioGroupPreview disabled={isDisabled.value} />
      </>
    );
  },
});

const app = createApp(Buttons);
app.mount(container);
