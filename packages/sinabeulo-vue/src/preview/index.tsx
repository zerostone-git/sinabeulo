import { createApp, defineComponent } from 'vue';
import { Checkbox } from '..';
import ButtonPreview from './ButtonPreview';
import CheckboxPreview from './CheckboxPreview';

const container = document.createElement('div');
document.body.appendChild(container);

const Buttons = defineComponent({
  components: { ButtonPreview, CheckboxPreview },
  data() {
    return {
      isDisabled: false,
    };
  },
  render() {
    return (
      <>
        <Checkbox
          label="Disabled"
          checked={this.isDisabled}
          onChange={(e?: Event, checked?: boolean): void => {
            this.isDisabled = !!checked;
          }}
        />
        <hr />
        <ButtonPreview disabled={this.isDisabled} />
        <CheckboxPreview disabled={this.isDisabled} />
      </>
    );
  },
});

const app = createApp(Buttons);
app.mount(container);
