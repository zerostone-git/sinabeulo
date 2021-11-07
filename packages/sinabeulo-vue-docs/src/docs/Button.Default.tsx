import { defineComponent } from 'vue';
import { Button } from '@sinabeulo/vue';
import Flex from '../components/Flex';

const ButtonDefault = defineComponent({
  components: {
    Button,
  },
  data() {
    return {
      isChecked: false,
      isDisabled: false,
    };
  },
  methods: {
    toggleIsChecked(): void {
      this.isChecked = !this.isChecked;
    },
    toggleIsDisabled(): void {
      this.isDisabled = !this.isDisabled;
    },
  },
  render() {
    return (
      <div>
        <h3>속성</h3>
        <div>
          <label>
            <Flex>
              <input
                type="checkbox"
                checked={this.isChecked}
                onChange={() => this.toggleIsChecked()}
              />
              Checked
            </Flex>
          </label>
        </div>
        <div>
          <label>
            <Flex>
              <input
                type="checkbox"
                checked={this.isDisabled}
                onChange={() => this.toggleIsDisabled()}
              />
              Disabled
            </Flex>
          </label>
        </div>
        <h3>기본 버튼</h3>
        <div>
          <Flex>
            <Button checked={this.isChecked} disabled={this.isDisabled} primary>
              Primary
            </Button>
            <Button checked={this.isChecked} disabled={this.isDisabled}>
              Standard
            </Button>
          </Flex>
        </div>
      </div>
    );
  },
});

export default ButtonDefault;
