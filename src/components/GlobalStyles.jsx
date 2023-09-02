import { Global, css } from '@emotion/react';
// import 'modern-normalize';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        root {
          --modal-shadow-color: rgba(22, 22, 22, 0.05);
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        html {
          -ms-overflow-style: none; /* IE 10+ */
          scrollbar-width: none; /* Firefox */
        }

        body {
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 14px;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
        ul,
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
          padding: 0;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        .dark {
          --primary-text-color: rgba(255, 255, 255, 1); //white
          --secondary-text-color: rgba(255, 255, 255, 0.5); //white

          --primary-bg-color: rgba(31, 31, 31, 1); //black
          --secondary-bg-color: rgba(18, 18, 18, 1); //black

          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */
          --sidebar-backdrop-color: rgba(21, 21, 21, 0.5);
          --sidebar-icon-logo-bg-color: rgba(31, 31, 31, 1);
          --sidebar-icon-logo-color: rgba(255, 255, 255, 1);
          --sidebar-primary-bg-color: rgba(18, 18, 18, 1);
          --sidebar-secondary-bg-color: rgba(31, 31, 31, 1);
          --sidebar-primary-text-color: rgba(255, 255, 255, 1);
          --sidebar-secondary-text-color: rgba(255, 255, 255, 0.5);
          --sidebar-border-color: rgba(255, 255, 255, 0.1);
          --sidebar-icon-logout-color: rgba(190, 219, 176, 1);
          --sidebar-icon-logout-color-HOVER-FOCUS: #9dc888;
          --sidebar-icon-plus-bg-color: rgba(190, 219, 176, 1);
          --sidebar-icon-plus-bg-color-HOVER-FOCUS: #9dc888;
          --sidebar-icon-plus-color: rgba(18, 18, 18, 1);
          --sidebar-scroll-bg-color: rgba(255, 255, 255, 0.08);
          --sidebar-scroll-thumb-color: rgba(157, 200, 136, 0.2);
          --sidebar-scroll-thumb-color-HOVER: rgba(157, 200, 136, 0.5);
          --sidebar-board-item-bg-color-CURRENT: rgba(31, 31, 31, 0.4);
          --sidebar-board-item-bg-color-AFTER: #bedbb0;
          --default-screen-page-link-color: #bedbb0;
          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */

          --header-theme-color: rgba(255, 255, 255, 0.8); //white
          --header-bg-color: rgba(22, 22, 22, 1); //black

          --button-bg-color: rgba(190, 219, 176, 1); //light green
          --button-bg-color-hover: #9dc888; //green

          --button-add-bg-color: #121212; //black
          --button-add-box-color: #ffffff; //white
          --icon-add-color: #121212; //black

          --icon-plus-color: rgba(255, 255, 255, 1); //white
          --icon-plus-bg-color: rgba(22, 22, 22, 1); //black

          --modal-bg-color: rgba(21, 21, 21, 1); //black

          --screen-page-scrollbar-bg-color: rgba(255, 255, 255, 0.2);
          --screen-page-scrollbar-thumb-color: rgba(18, 18, 18, 1);
          --screen-page-scrollbar-thumb-color-HOVER: #9dc888;

          //----------------Yuliya-style--------------------------//

          --avatar-bcg-color: rgba(31, 31, 31, 1); //dark-grey
          --avatar-fill-color: rgba(21, 21, 21, 1); //black
          --icon-plus-bcg: rgba(190, 219, 176, 1); //light-green
          --icon-add-color: rgba(22, 22, 22, 1); // black
          --input-border-color: rgba(190, 219, 176, 1); //green
          --input-bcg-color: rgba(31, 31, 31, 1);
          --btn-text-color: rgba(22, 22, 22, 1); // black

          //------------------------------------------//
        }

        .light {
          --primary-text-color: rgba(22, 22, 22, 1); //black
          --secondary-text-color: rgba(22, 22, 22, 0.7); //black

          --primary-bg-color: rgba(246, 246, 247, 1); //light gray
          --secondary-bg-color: rgba(255, 255, 255, 1); //white

          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */
          --sidebar-backdrop-color: rgba(21, 21, 21, 0.3);
          --sidebar-icon-logo-bg-color: rgba(31, 31, 31, 1);
          --sidebar-icon-logo-color: rgba(255, 255, 255, 1);
          --sidebar-primary-bg-color: rgba(255, 255, 255, 1);
          --sidebar-secondary-bg-color: rgba(246, 246, 247, 1);
          --sidebar-primary-text-color: rgba(22, 22, 22, 1);
          --sidebar-secondary-text-color: rgba(22, 22, 22, 0.5);
          --sidebar-border-color: rgba(22, 22, 22, 0.1);
          --sidebar-icon-logout-color: rgba(190, 219, 176, 1);
          --sidebar-icon-logout-color-HOVER-FOCUS: #9dc888;
          --sidebar-icon-plus-bg-color: rgba(190, 219, 176, 1);
          --sidebar-icon-plus-bg-color-HOVER-FOCUS: #9dc888;
          --sidebar-icon-plus-color: rgba(18, 18, 18, 1);
          --sidebar-scroll-bg-color: rgba(0, 0, 0, 0.08);
          --sidebar-scroll-thumb-color: rgba(157, 200, 136, 0.2);
          --sidebar-scroll-thumb-color-HOVER: rgba(157, 200, 136, 0.5);
          --sidebar-board-item-bg-color-CURRENT: rgba(246, 246, 247, 0.4);
          --sidebar-board-item-bg-color-AFTER: #bedbb0;
          --default-screen-page-link-color: #bedbb0;
          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */

          --header-theme-color: rgba(22, 22, 22, 0.8); //black
          --header-bg-color: rgba(252, 252, 252, 1); //white

          --button-bg-color: rgba(190, 219, 176, 1); //light green
          --button-bg-color-hover: #9dc888; //green
          --icon-plus-color: rgba(255, 255, 255, 1); //white
          --icon-plus-bg-color: rgba(22, 22, 22, 1); //black

          --button-add-bg-color: #ffffff; //white
          --button-add-box-color: #161616; //black
          --icon-add-color: #ffffff; //white

          --modal-bg-color: rgba(252, 252, 252, 1); //white

          --screen-page-scrollbar-bg-color: rgba(232, 232, 232, 1);
          --screen-page-scrollbar-thumb-color: rgba(22, 22, 22, 0.1);
          --screen-page-scrollbar-thumb-color-HOVER: #9dc888;

          //----------------Yuliya-style--------------------------//

          --avatar-bcg-color: rgba(246, 246, 247, 1); // light-grey
          --avatar-fill-color: rgba(255, 255, 255, 1); //white
          --icon-plus-bcg: rgba(190, 219, 176, 1); //light-green
          --icon-add-color: rgba(22, 22, 22, 1); // black
          --input-border-color: rgba(190, 219, 176, 1); //green
          --input-bcg-color: rgba(252, 252, 252, 1);
          --btn-text-color: rgba(22, 22, 22, 1); // black

          //------------------------------------------//
        }

        .violet {
          --primary-text-color: rgba(22, 22, 22, 1); //black
          --secondary-text-color: rgba(22, 22, 22, 0.7); //black

          --primary-bg-color: rgba(236, 237, 253, 1); //light violet
          --secondary-bg-color: rgba(255, 255, 255, 1); //white

          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */
          --sidebar-backdrop-color: rgba(21, 21, 21, 0.3);
          --sidebar-icon-logo-bg-color: rgba(236, 237, 253, 1);
          --sidebar-icon-logo-color: rgba(82, 85, 188, 1);
          --sidebar-primary-bg-color: rgba(82, 85, 188, 1);
          --sidebar-secondary-bg-color: rgba(236, 237, 253, 0.4);
          --sidebar-primary-text-color: rgba(255, 255, 255, 1);
          --sidebar-secondary-text-color: rgba(255, 255, 255, 0.5);
          --sidebar-border-color: rgba(255, 255, 255, 0.1);
          --sidebar-icon-logout-color: rgba(255, 255, 255, 1);
          --sidebar-icon-logout-color-HOVER-FOCUS: #b8bcfd;
          --sidebar-icon-plus-bg-color: rgba(184, 188, 253, 1);
          --sidebar-icon-plus-bg-color-HOVER-FOCUS: #979cea;
          --sidebar-icon-plus-color: rgba(255, 255, 255, 1);
          --sidebar-scroll-bg-color: rgba(255, 255, 255, 0.08);
          --sidebar-scroll-thumb-color: rgba(184, 188, 253, 0.2);
          --sidebar-scroll-thumb-color-HOVER: rgba(184, 188, 253, 0.5);
          --sidebar-board-item-bg-color-CURRENT: rgba(255, 255, 255, 0.2);
          --sidebar-board-item-bg-color-AFTER: #ffffff;
          --default-screen-page-link-color: #5255bc;
          /* DO NOT TOUCH THIS VARIABLES OR I WILL FIND YOU!!!! */

          --header-theme-color: rgba(22, 22, 22, 0.8); //black
          --header-bg-color: rgba(255, 255, 255, 1); //white

          --button-bg-color-hover: rgba(82, 85, 188, 1); //blue
          --button-bg-color: #7b7ede; //hover blue
          --icon-plus-color: rgba(22, 22, 22, 1); //black
          --icon-plus-bg-color: rgba(255, 255, 255, 1); //white

          --button-add-bg-color: #ffffff; //white
          --button-add-box-color: #5255bc; //fiolet
          --icon-add-color: #ffffff; //white

          --modal-bg-color: rgba(252, 252, 252, 1); //white

          --screen-page-scrollbar-bg-color: rgba(255, 255, 255, 1);
          --screen-page-scrollbar-thumb-color: rgba(184, 188, 253, 1);
          --screen-page-scrollbar-thumb-color-HOVER: rgba(82, 85, 188, 1);

          //----------------Yuliya-style--------------------------//

          --avatar-bcg-color: rgba(236, 237, 253, 1); // light-grey
          --avatar-fill-color: rgba(255, 255, 255, 1); //white
          --icon-plus-bcg: rgba(236, 237, 253, 1); //light-purple
          --icon-add-color: rgba(22, 22, 22, 1); // black
          --input-border-color: rgba(82, 85, 188, 1); //purple
          --input-bcg-color: rgba(252, 252, 252, 1);
          --btn-text-color: rgba(255, 255, 255, 1); //white

          //------------------------------------------//
        }
      `}
    />
  );
};

export default GlobalStyles;
