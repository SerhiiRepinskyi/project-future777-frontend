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
         
          --primary-bg-color: rgba(31, 31, 31, 1);  //black
          --secondary-bg-color: rgba(18, 18, 18, 1);  //black
                   
          --sidebar-icon-logo-bg-color: rgba(31, 31, 31, 1);  //black
          --sidebar-icon-logo-color: rgba(255, 255, 255, 1); //white
          --sidebar-icon-plus-bg-color: rgba(190, 219, 176, 1); //light green
          --sidebar-icon-plus-color: rgba(18, 18, 18, 1); //black
          --sidebar-icon-logout-color: rgba(190, 219, 176, 1); //light green

          --sidebar-primary-bg-color: rgba(18, 18, 18, 1);  //black
          --sidebar-secondary-bg-color: rgba(31, 31, 31, 1);  //black

          --sidebar-border-color: rgba(255, 255, 255, 0.1); //white
         
          --header-theme-color: rgba(255, 255, 255, 0.8); //white
          --header-bg-color: rgba(22, 22, 22, 1);  //black

          --button-bg-color: rgba(190, 219, 176, 1);  //light green
          --icon-plus-color: rgba(255, 255, 255, 1);  //white
          --icon-plus-bg-color: rgba(22, 22, 22, 1);  //black

          --modal-bg-color: rgba(21, 21, 21, 1); //black
        }

        .light {
          --primary-text-color: rgba(22, 22, 22, 1); //black
          --secondary-text-color: rgba(22, 22, 22, 0.7); //black
         
          --primary-bg-color: rgba(246, 246, 247, 1);  //light gray
          --secondary-bg-color: rgba(255, 255, 255, 1);  //white
                   
          --sidebar-icon-logo-bg-color: rgba(31, 31, 31, 1);  //black
          --sidebar-icon-logo-color: rgba(255, 255, 255, 1); //white
          --sidebar-icon-plus-bg-color: rgba(190, 219, 176, 1); //light green
          --sidebar-icon-plus-color: rgba(18, 18, 18, 1); //black
          --sidebar-icon-logout-color: rgba(190, 219, 176, 1); //light green

          --sidebar-primary-bg-color: rgba(255, 255, 255, 1);  //white
          --sidebar-secondary-bg-color: rgba(246, 246, 247, 1);  //light gray

          --sidebar-border-color: rgba(22, 22, 22, 0.1); //light gray
         
          --header-theme-color: rgba(22, 22, 22, 0.8); //black
          --header-bg-color: rgba(252, 252, 252, 1);  //white

          --button-bg-color: rgba(190, 219, 176, 1);  //light green
          --icon-plus-color: rgba(255, 255, 255, 1);  //white
          --icon-plus-bg-color: rgba(22, 22, 22, 1);  //black

          --modal-bg-color: rgba(252, 252, 252, 1); //white
        }

        .violet {
          --primary-text-color: rgba(22, 22, 22, 1); //black
          --secondary-text-color: rgba(22, 22, 22, 0.7); //black
         
          --primary-bg-color: rgba(236, 237, 253, 1);  //light violet
          --secondary-bg-color: rgba(255, 255, 255, 1);  //white
                   
          --sidebar-icon-logo-bg-color: rgba(236, 237, 253, 1);  //light violet
          --sidebar-icon-logo-color: rgba(82, 85, 188, 1);  //violet
          --sidebar-icon-plus-bg-color: rgba(184, 188, 253, 1); //light violet
          --sidebar-icon-plus-color: rgba(255, 255, 255, 1); //white
          --sidebar-icon-logout-color: rgba(255, 255, 255, 1); //white

          --sidebar-primary-bg-color: rgba(82, 85, 188, 1);  //blue
          --sidebar-secondary-bg-color: rgba(236, 237, 253, 0.4);  //light violet

          --sidebar-border-color: rgba(255, 255, 255, 0.1); //light gray
         
          --header-theme-color: rgba(22, 22, 22, 0.8); //black
          --header-bg-color: rgba(255, 255, 255, 1);  //white

          --button-bg-color: rgba(82, 85, 188, 1);  //blue
          --icon-plus-color: rgba(22, 22, 22, 1);  //black
          --icon-plus-bg-color: rgba(255, 255, 255, 1);  //white

          --modal-bg-color: rgba(252, 252, 252, 1); //white
        }
      `}
    />
  );
};

export default GlobalStyles;
