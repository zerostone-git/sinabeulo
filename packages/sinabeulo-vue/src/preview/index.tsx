import { createApp, defineComponent } from 'vue';
import { Button } from '..';

const container = document.createElement('div');
document.body.appendChild(container);

const Buttons = defineComponent({
  components: Button,
  render() {
    return (
      <div>
        <div
          style={{
            display: 'grid',
            gridAutoColumns: 'max-content',
            gridAutoRows: 'minmax(40px, auto)',
            gap: '10px',
          }}
        >
          <div style={{ gridRow: 1, gridColumn: 1 }}>
            <Button>Standard</Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 2 }}>
            <Button v-slots={{ icon: () => <span>&#128513;</span> }}>
              Standard
            </Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 3 }}>
            <Button v-slots={{ icon: () => <span>&#128513;</span> }} />
          </div>
          <div style={{ gridRow: 1, gridColumn: 4 }}>
            <Button disabled>Standard</Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 5 }}>
            <Button disabled v-slots={{ icon: () => <span>&#128513;</span> }}>
              Standard
            </Button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 6 }}>
            <Button disabled v-slots={{ icon: () => <span>&#128513;</span> }} />
          </div>

          <div style={{ gridRow: 2, gridColumn: 1 }}>
            <Button primary>Primary</Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <Button primary v-slots={{ icon: () => <span>&#128513;</span> }}>
              Primary
            </Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 3 }}>
            <Button primary v-slots={{ icon: () => <span>&#128513;</span> }} />
          </div>
          <div style={{ gridRow: 2, gridColumn: 4 }}>
            <Button primary disabled>
              Primary
            </Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 5 }}>
            <Button
              primary
              disabled
              v-slots={{ icon: () => <span>&#128513;</span> }}
            >
              Primary
            </Button>
          </div>
          <div style={{ gridRow: 2, gridColumn: 6 }}>
            <Button
              primary
              disabled
              v-slots={{ icon: () => <span>&#128513;</span> }}
            />
          </div>

          <div style={{ gridRow: 3, gridColumn: 1 }}>
            <Button checked>Checked</Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 2 }}>
            <Button checked v-slots={{ icon: () => <span>&#128513;</span> }}>
              Checked
            </Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 3 }}>
            <Button checked v-slots={{ icon: () => <span>&#128513;</span> }} />
          </div>
          <div style={{ gridRow: 3, gridColumn: 4 }}>
            <Button checked disabled>
              Checked
            </Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 5 }}>
            <Button
              checked
              disabled
              v-slots={{ icon: () => <span>&#128513;</span> }}
            >
              Checked
            </Button>
          </div>
          <div style={{ gridRow: 3, gridColumn: 6 }}>
            <Button
              checked
              disabled
              v-slots={{ icon: () => <span>&#128513;</span> }}
            />
          </div>
        </div>
      </div>
    );
  },
});

const app = createApp(Buttons);
app.mount(container);
