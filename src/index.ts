import { ILabShell, JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IThemeManager } from '@jupyterlab/apputils';
import { LabIcon, jupyterFaviconIcon, jupyterIcon, jupyterlabWordmarkIcon } from '@jupyterlab/ui-components';
import { Widget } from '@lumino/widgets';
 
/**
* Initialization data for the techx extension.
*/
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'techx:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager, ILabShell],
  activate: (app: JupyterFrontEnd, manager: IThemeManager, shell: ILabShell) => {
    console.log('JupyterLab extension techx is activated!');
    const style = 'techx/index.css';
    const svg = `
<svg width="102" height="32" viewBox="0 0 102 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_336_7973)">
<path d="M14.78 20.0834L21.6675 28.5842C24.1338 31.5905 33.5021 31.5372 31.3347 28.5986L19.6024 14.137L14.78 20.0834Z" fill="url(#paint0_linear_336_7973)"/>
<path d="M12.9708 13.8213L7.1422 21.0461L7.07664 21.0617L0.865727 28.7169C-1.35288 31.1793 4.09846 31.3786 7.86084 30.4511C10.443 29.8038 11.8804 27.6967 14.2037 24.802L14.6112 24.3317L14.5707 24.3073L17.8499 20.3366C19.6151 18.1516 22.497 18.1803 24.3252 20.3267L31.1567 28.3477L19.4461 13.8114C18.5648 12.7304 17.3569 12.1684 16.181 12.176C15.0302 12.1438 13.8862 12.7211 12.9708 13.8213ZM31.3087 28.5493L31.3645 28.6379L31.1567 28.3477L31.3087 28.5493Z" fill="url(#paint1_linear_336_7973)"/>
<path d="M1.42564 3.50957L13.1413 17.9749L17.9703 12.0021L11.0874 3.5219C9.85431 2.03787 6.93499 1.29408 4.56471 1.29671C2.1665 1.28785 0.326169 2.03546 1.42564 3.50957Z" fill="url(#paint2_linear_336_7973)"/>
<path d="M24.9088 1.65924C22.3265 2.30658 20.9547 4.39822 18.5909 7.26882L18.1583 7.77907L18.1834 7.73914L14.9447 11.7344C13.1795 13.9195 10.2975 13.891 8.46917 11.7445L1.40421 3.47302L1.45999 3.56165L13.283 18.2755C15.0862 20.4619 17.9934 20.4505 19.799 18.2898L25.6528 11.0246L25.6932 11.049L31.9042 3.39338C33.3582 1.79158 31.5393 1.13698 29.0813 1.14354C27.7337 1.15801 26.2201 1.34775 24.9088 1.65924Z" fill="url(#paint3_linear_336_7973)"/>
</g>
<path d="M98.1839 25.4115C97.8562 26.2376 97.3179 26.8573 96.5688 27.2933C95.8198 27.7064 94.9771 27.9359 94.0174 27.9359C93.0577 27.9359 92.2618 27.7293 91.7 27.3392C91.1382 26.9491 90.8807 26.3983 90.8807 25.7098C90.8807 25.1132 91.1148 24.6083 91.5596 24.1952C92.0043 23.7821 92.8938 23.5756 94.2046 23.5756H98.1839V25.4115ZM100.057 15.8189C98.7457 14.6944 96.9199 14.1437 94.5323 14.1437C93.2215 14.1437 91.9575 14.3043 90.7403 14.6485C89.5231 14.9698 88.4697 15.4747 87.5802 16.1402L89.1017 18.8941C89.7103 18.3892 90.4828 17.9991 91.3723 17.7237C92.2618 17.4483 93.1747 17.3106 94.0876 17.3106C95.4686 17.3106 96.4986 17.6089 97.1774 18.2285C97.8562 18.8482 98.1839 19.6973 98.1839 20.7988V21.0283H93.9237C92.2618 21.0283 90.9275 21.2348 89.921 21.6709C88.9145 22.0839 88.1888 22.6576 87.7441 23.392C87.2994 24.1264 87.0887 24.9296 87.0887 25.8475C87.0887 26.7655 87.3462 27.6146 87.8377 28.326C88.3293 29.0374 89.0549 29.6341 89.9678 30.0471C90.9041 30.4602 91.9575 30.6668 93.1981 30.6668C94.6494 30.6668 95.8666 30.4143 96.8263 29.8865C97.4817 29.5193 97.9967 29.0603 98.3712 28.4866V30.4602H101.999V20.9824C102.023 18.6646 101.367 16.9205 100.057 15.8189ZM81.8454 27.5457C81.1197 27.5457 80.5579 27.3392 80.16 26.9032C79.7621 26.4901 79.5514 25.8934 79.5514 25.1132V17.4712H83.9521V14.442H79.5514V10.7702H75.6891V14.442H72.9738V17.4712H75.6891V25.2279C75.6891 27.0179 76.1807 28.3719 77.1638 29.2898C78.1469 30.2078 79.5514 30.6668 81.3538 30.6668C82.056 30.6668 82.7349 30.575 83.3903 30.3914C84.0457 30.2078 84.6075 29.9324 85.0522 29.5652L83.9755 26.8802C83.4371 27.3392 82.7114 27.5457 81.8454 27.5457ZM66.4197 25.4115C66.092 26.2376 65.5536 26.8573 64.8045 27.2933C64.0555 27.7064 63.2128 27.9359 62.2531 27.9359C61.2934 27.9359 60.4975 27.7293 59.9357 27.3392C59.374 26.9491 59.1165 26.3983 59.1165 25.7098C59.1165 25.1132 59.3506 24.6083 59.7953 24.1952C60.24 23.7821 61.1295 23.5756 62.4404 23.5756H66.4197V25.4115ZM68.3157 15.8189C67.0049 14.6944 65.1791 14.1437 62.7915 14.1437C61.4807 14.1437 60.2166 14.3043 58.9994 14.6485C57.7822 14.9698 56.7289 15.4747 55.8394 16.1402L57.3375 18.8941C57.9461 18.3892 58.7185 17.9991 59.608 17.7237C60.4975 17.4483 61.4104 17.3106 62.3233 17.3106C63.7044 17.3106 64.7343 17.6089 65.4131 18.2285C66.092 18.8482 66.4197 19.6973 66.4197 20.7988V21.0283H62.1595C60.4975 21.0283 59.1633 21.2348 58.1568 21.6709C57.1502 22.0839 56.4246 22.6576 55.9798 23.392C55.5351 24.1264 55.3244 24.9296 55.3244 25.8475C55.3244 26.7655 55.5819 27.6146 56.0735 28.326C56.565 29.0374 57.2907 29.6341 58.2036 30.0471C59.1399 30.4602 60.1932 30.6668 61.4338 30.6668C62.8851 30.6668 64.1023 30.4143 65.062 29.8865C65.7174 29.5193 66.2324 29.0603 66.6069 28.4866V30.4602H70.2351V21.0053C70.2585 18.6646 69.6031 16.9434 68.3157 15.8189ZM46.9913 25.0673C46.5465 25.8246 45.9613 26.4212 45.2357 26.8114C44.5101 27.2015 43.6908 27.408 42.7545 27.408C41.8182 27.408 40.9989 27.2015 40.2733 26.8114C39.5476 26.4212 38.9624 25.8246 38.5177 25.0673C38.0729 24.31 37.8623 23.415 37.8623 22.3823C37.8623 21.3496 38.0729 20.4316 38.5177 19.6743C38.9624 18.917 39.5476 18.3433 40.2733 17.9302C40.9989 17.5171 41.8182 17.3335 42.7545 17.3335C43.6908 17.3335 44.5101 17.5401 45.2357 17.9302C45.9613 18.3203 46.5465 18.917 46.9913 19.6743C47.436 20.4316 47.6467 21.3266 47.6467 22.3823C47.6467 23.4379 47.436 24.31 46.9913 25.0673ZM47.5999 16.3238C47.1317 15.796 46.5934 15.3829 46.0082 15.0387C44.9314 14.442 43.6908 14.1437 42.3097 14.1437C40.718 14.1437 39.3136 14.4879 38.0495 15.1764C36.7855 15.8648 35.8024 16.8287 35.0768 18.045C34.3511 19.2612 34 20.73 34 22.3823C34 24.0346 34.3511 25.5033 35.0768 26.7196C35.8024 27.9359 36.7855 28.8997 38.0495 29.6111C39.3136 30.2996 40.7414 30.6438 42.3097 30.6438C43.7376 30.6438 44.9782 30.3455 46.0784 29.7488C46.7338 29.3816 47.2956 28.9227 47.7637 28.326V30.4373H51.4387V8.03931H47.5999V16.3238Z" fill="#00A4E5"/>
<defs>
<linearGradient id="paint0_linear_336_7973" x1="28.1922" y1="30.1212" x2="20.6263" y2="20.9901" gradientUnits="userSpaceOnUse">
<stop stop-color="#0083E5"/>
<stop offset="0.36" stop-color="#0083E5"/>
<stop offset="1" stop-color="#2E3192"/>
</linearGradient>
<linearGradient id="paint1_linear_336_7973" x1="31.3077" y1="4.49405" x2="6.98468" y2="44.8958" gradientUnits="userSpaceOnUse">
<stop stop-color="#00A4E5"/>
<stop offset="1" stop-color="#006FE5"/>
</linearGradient>
<linearGradient id="paint2_linear_336_7973" x1="3.73411" y1="1.20903" x2="12.3796" y2="11.4451" gradientUnits="userSpaceOnUse">
<stop stop-color="#0083E5"/>
<stop offset="0.36" stop-color="#0083E5"/>
<stop offset="1" stop-color="#2E3192"/>
</linearGradient>
<linearGradient id="paint3_linear_336_7973" x1="20.1754" y1="-2.126" x2="-4.14759" y2="38.2779" gradientUnits="userSpaceOnUse">
<stop stop-color="#00A4E5"/>
<stop offset="1" stop-color="#006FE5"/>
</linearGradient>
<clipPath id="clip0_336_7973">
<rect width="32.64" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`;
    const icon = new LabIcon({ name: 'ui-components:techx', svgstr: svg });
    const logo = new Widget();
    icon.element({
        container: logo.node,
        elementPosition: 'center',
        margin: '2px 2px 2px 8px',
        height: 'auto',
        width: '16px'
    });
    logo.id = 'techx-logo';
    shell.add(logo, 'top', { rank: 0 });
 
    // Set the icons elsewhere
    jupyterFaviconIcon.svgstr = svg;
    jupyterIcon.svgstr = svg;
    jupyterlabWordmarkIcon.svgstr = svg;
 
    manager.register({
      name: 'techx',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};
 
export default plugin;