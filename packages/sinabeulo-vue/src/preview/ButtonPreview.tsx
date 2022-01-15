import { defineComponent } from 'vue';
import { Button } from '..';

export default defineComponent({
  components: { Button },
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  render() {
    return (
      <div>
        <div
          style={{
            display: 'grid',
            gridAutoColumns: 'max-content',
            gridAutoRows: 'minmax(40px, auto)',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <div style={{ gridRow: 1, gridColumn: 1 }}>
            <Button disabled={this.disabled}>Standard</Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 2 }}>
            <Button
              disabled={this.disabled}
              v-slots={{ icon: () => <span>&#128513;</span> }}
            >
              Standard
            </Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 3 }}>
            <Button
              disabled={this.disabled}
              v-slots={{ icon: () => <span>&#128513;</span> }}
            />
          </div>

          <div style={{ gridRow: 2, gridColumn: 1 }}>
            <Button disabled={this.disabled} primary>
              Primary
            </Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <Button
              disabled={this.disabled}
              primary
              v-slots={{ icon: () => <span>&#128513;</span> }}
            >
              Primary
            </Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 3 }}>
            <Button
              disabled={this.disabled}
              primary
              v-slots={{ icon: () => <span>&#128513;</span> }}
            />
          </div>

          <div style={{ gridRow: 3, gridColumn: 1 }}>
            <Button disabled={this.disabled} checked>
              Checked
            </Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 2 }}>
            <Button
              disabled={this.disabled}
              checked
              v-slots={{ icon: () => <span>&#128513;</span> }}
            >
              Checked
            </Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 3 }}>
            <Button
              disabled={this.disabled}
              checked
              v-slots={{ icon: () => <span>&#128513;</span> }}
            />
          </div>
        </div>
      </div>
    );
  },
});
