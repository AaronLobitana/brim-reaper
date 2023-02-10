import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/brim-reaper2.PNG', import.meta.url).href;

class BrimReaper extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host 
    {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--brim-reaper-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }

    .myimage{
      width: 450px;
    }

    .overallcard{
      width: 400px;
      border: 4px solid black;
      display: inline-flex;
    }

    .box{
      background-color: #B19CD9;
    }

    .pic{
      width: 400px;
      transition: transform .5s ease-in-out;
    }

    .pic:hover{
      transform: rotate(360deg);
    }

    .heading{
      text-align: center;
    }

    .details{
      text-align: center;
      display: none;
    }

    .topbuttons{
      margin: 10px 0px 10px 0px;
      display: block;
    }


    .dupe{
      background-color: #B19CD9;
      color: white;
      text-align: center;
      padding: 15px;
      transition: background-color 0.8s;
      border: 4px double white;
      font-size: 20px;
    }

    .changebg{
      background-color: #B19CD9;
      color: white;
      text-align: center;
      padding: 15px;
      transition: background-color 0.8s;
      border: 4px double white;
      font-size: 20px;
    }

    .changehg{
      background-color: #B19CD9;
      color: white;
      text-align: center;
      padding: 15px;
      transition: background-color 0.8s;
      border: 4px double white;
      font-size: 20px;
    }

    .del{
      background-color: #B19CD9;
      color: white;
      text-align: center;
      padding: 15px;
      transition: background-color 0.8s;
      border: 4px double white;
      font-size: 20px;
    }

    .detailsbutton{
      background-color: #B19CD9;
      color: white;
      text-align: center;
      padding: 15px;
      transition: background-color 0.8s;
      border: 4px double white;
      font-size: 20px;
      margin: 10px;
    }

    .detailsbutton:hover{
      background-color: black;
    }

    .detailsbutton:focus{
      background: gray;
      color: #041E42;
    }

    .reveal{
      text-align: center;
    }


    .dupe:hover{
      background-color: black;
    }

    .dupe:focus{
      background: gray;
      color: #041E42;
    }

    .changebg:hover{
      background-color: black;
    }

    .changebg:focus{
      background: gray;
      color: #041E42;
    }

    .changehg:hover{
      background-color: black;
    }

    .changehg:focus{
      background: gray;
      color: #041E42;
    }

    .del:hover{
      background-color: black;
    }

    .del:focus{
      background: gray;
      color: #041E42;
    }

    @media only screen and (max-width: 425px)
    {
      .reveal{
        display: none;
      }

      .overallcard{
        width: 250px;
        border: 4px solid black;
        display: inline-flex;
      }
      
      .pic{
        width: 250px;
        transition: transform .5s ease-in-out;
      }
  }

  `;

  constructor() {
    super();
    this.header = 'The Brim Reaper';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img class="myimage" alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <div class="topbuttons">
          <button class="dupe">Duplicate</button>
          <button class="changebg">Change Background</button>
          <button class="changehg">Change Heading</button>
          <button class="del" id="del">Delete</button>
        </div>

        <div class="overallcard">
          <div class="box">
    
            <img class="pic" src="https://pbs.twimg.com/media/FajpQj_XwAEwCWw.jpg" alt="the brim reaper">
    
            <div class="heading">
              <h1>the brim reaper</h1>
            </div>
    
            <div class="details">
              <h3>fear the reaper</h3>
            </div>
            <div class="reveal">
              <button class="detailsbutton">Details</button>
            </div>
          </div>
        </div>

    


        <p>Disclaimer: This is a fan page. Image credits go to </p>
        <a
          class="app-link"
          href="https://www.instagram.com/williamknightt/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          William Knight
        </a>


      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >Aaron lobitana</a
        >.
      </p>
    `;
  }
}

customElements.define('brim-reaper', BrimReaper);