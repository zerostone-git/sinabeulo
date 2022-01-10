<script lang="ts">
	import { Button } from '..';
</script>

<div>
	<div style="display: grid; grid-auto-columns: max-content; grid-auto-rows: minmax(40px, auto); gap: 10px;">
		<div style="grid-row: 1; grid-column: 1;">
			<Button>Standard</Button>
		</div>
		<div style="grid-row: 1; grid-column: 2;">
			<Button><span slot="icon">&#128513;</span>Standard</Button>
		</div>
		<div style="grid-row: 1; grid-column: 3;">
			<Button><span slot="icon">&#128513;</span></Button>
		</div>
		<div style="grid-row: 1; grid-column: 4;">
			<Button disabled>Standard</Button>
		</div>
		<div style="grid-row: 1; grid-column: 5;">
			<Button disabled><span slot="icon">&#128513;</span>Standard</Button>
		</div>
		<div style="grid-row: 1; grid-column: 6;">
			<Button disabled><span slot="icon">&#128513;</span></Button>
		</div>

		<div style="grid-row: 2; grid-column: 1;">
			<Button primary>Primary</Button>
		</div>
		<div style="grid-row: 2; grid-column: 2;">
			<Button primary><span slot="icon">&#128513;</span>Primary</Button>
		</div>
		<div style="grid-row: 2; grid-column: 3;">
			<Button primary><span slot="icon">&#128513;</span></Button>
		</div>
		<div style="grid-row: 2; grid-column: 4;">
			<Button primary disabled>Primary</Button>
		</div>
		<div style="grid-row: 2; grid-column: 5;">
			<Button primary disabled><span slot="icon">&#128513;</span>Primary</Button>
		</div>
		<div style="grid-row: 2; grid-column: 6;">
			<Button primary disabled><span slot="icon">&#128513;</span></Button>
		</div>

		<div style="grid-row: 3; grid-column: 1;">
			<Button checked>Checked</Button>
		</div>
		<div style="grid-row: 3; grid-column: 2;">
			<Button checked><span slot="icon">&#128513;</span>Checked</Button>
		</div>
		<div style="grid-row: 3; grid-column: 3;">
			<Button checked><span slot="icon">&#128513;</span></Button>
		</div>
		<div style="grid-row: 3; grid-column: 4;">
			<Button checked disabled>Checked</Button>
		</div>
		<div style="grid-row: 3; grid-column: 5;">
			<Button checked disabled><span slot="icon">&#128513;</span>Checked</Button>
		</div>
		<div style="grid-row: 3; grid-column: 6;">
			<Button checked disabled><span slot="icon">&#128513;</span></Button>
		</div>
	</div>
</div>
