import { html } from 'lit';
import '../src/brim-reaper.js';

export default {
  title: 'BrimReaper',
  component: 'brim-reaper',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <brim-reaper
      style="--brim-reaper-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </brim-reaper>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
