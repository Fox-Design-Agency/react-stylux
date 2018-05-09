'use strict';

var _TestBlock = require('./TestBlock');

var _TestBlock2 = _interopRequireDefault(_TestBlock);

var _Wrapper = require('./Wrappers/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Holder = require('./Holders/Holder');

var _Holder2 = _interopRequireDefault(_Holder);

var _A = require('./Other/A');

var _A2 = _interopRequireDefault(_A);

var _HR = require('./Dividers/HR');

var _HR2 = _interopRequireDefault(_HR);

var _MainHeading = require('./Headings/MainHeadings/MainHeading1');

var _MainHeading2 = _interopRequireDefault(_MainHeading);

var _MainHeading3 = require('./Headings/MainHeadings/MainHeading2');

var _MainHeading4 = _interopRequireDefault(_MainHeading3);

var _MainHeading5 = require('./Headings/MainHeadings/MainHeading3');

var _MainHeading6 = _interopRequireDefault(_MainHeading5);

var _MainHeading7 = require('./Headings/MainHeadings/MainHeading4');

var _MainHeading8 = _interopRequireDefault(_MainHeading7);

var _MainHeading9 = require('./Headings/MainHeadings/MainHeading5');

var _MainHeading10 = _interopRequireDefault(_MainHeading9);

var _Heading = require('./Headings/H2/Heading1');

var _Heading2 = _interopRequireDefault(_Heading);

var _Heading3 = require('./Headings/H2/Heading2');

var _Heading4 = _interopRequireDefault(_Heading3);

var _Heading5 = require('./Headings/H2/Heading3');

var _Heading6 = _interopRequireDefault(_Heading5);

var _Heading7 = require('./Headings/H2/Heading4');

var _Heading8 = _interopRequireDefault(_Heading7);

var _Heading9 = require('./Headings/H2/Heading5');

var _Heading10 = _interopRequireDefault(_Heading9);

var _SubHeading = require('./Headings/SubHeadings/SubHeading1');

var _SubHeading2 = _interopRequireDefault(_SubHeading);

var _SubHeading3 = require('./Headings/SubHeadings/SubHeading2');

var _SubHeading4 = _interopRequireDefault(_SubHeading3);

var _SubHeading5 = require('./Headings/SubHeadings/SubHeading3');

var _SubHeading6 = _interopRequireDefault(_SubHeading5);

var _SubHeading7 = require('./Headings/SubHeadings/SubHeading4');

var _SubHeading8 = _interopRequireDefault(_SubHeading7);

var _SubHeading9 = require('./Headings/SubHeadings/SubHeading5');

var _SubHeading10 = _interopRequireDefault(_SubHeading9);

var _SecondarySubHeading = require('./Headings/SecondarySubHeadings/SecondarySubHeading1');

var _SecondarySubHeading2 = _interopRequireDefault(_SecondarySubHeading);

var _SecondarySubHeading3 = require('./Headings/SecondarySubHeadings/SecondarySubHeading2');

var _SecondarySubHeading4 = _interopRequireDefault(_SecondarySubHeading3);

var _SecondarySubHeading5 = require('./Headings/SecondarySubHeadings/SecondarySubHeading3');

var _SecondarySubHeading6 = _interopRequireDefault(_SecondarySubHeading5);

var _SecondarySubHeading7 = require('./Headings/SecondarySubHeadings/SecondarySubHeading4');

var _SecondarySubHeading8 = _interopRequireDefault(_SecondarySubHeading7);

var _SecondarySubHeading9 = require('./Headings/SecondarySubHeadings/SecondarySubHeading5');

var _SecondarySubHeading10 = _interopRequireDefault(_SecondarySubHeading9);

var _Paragraph = require('./Paragraphs/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _PLQ = require('./Paragraphs/PullQuotes/PLQ');

var _PLQ2 = _interopRequireDefault(_PLQ);

var _Button = require('./Buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('./Images/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Figure = require('./Images/Figure');

var _Figure2 = _interopRequireDefault(_Figure);

var _Hero = require('./Images/Heros/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Navbar = require('./NavBars/NavBars/Navbar1');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Navbar3 = require('./NavBars/NavBars/Navbar2');

var _Navbar4 = _interopRequireDefault(_Navbar3);

var _SubNavBar = require('./NavBars/SubNavBar/SubNavBar1');

var _SubNavBar2 = _interopRequireDefault(_SubNavBar);

var _SubNavBar3 = require('./NavBars/SubNavBar/SubNavBar2');

var _SubNavBar4 = _interopRequireDefault(_SubNavBar3);

var _DropDownNav = require('./NavBars/DropDowns/DropDownNav1');

var _DropDownNav2 = _interopRequireDefault(_DropDownNav);

var _DropDownNav3 = require('./NavBars/DropDowns/DropDownNav2');

var _DropDownNav4 = _interopRequireDefault(_DropDownNav3);

var _DropDownNav5 = require('./NavBars/DropDowns/DropDownNav5');

var _DropDownNav6 = _interopRequireDefault(_DropDownNav5);

var _Brand = require('./Brands/Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _Carousel = require('./Carousels/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Toggler = require('./Togglers/Toggler1');

var _Toggler2 = _interopRequireDefault(_Toggler);

var _Toggler3 = require('./Togglers/Toggler2');

var _Toggler4 = _interopRequireDefault(_Toggler3);

var _Toggler5 = require('./Togglers/Toggler3');

var _Toggler6 = _interopRequireDefault(_Toggler5);

var _Toggler7 = require('./Togglers/Toggler4');

var _Toggler8 = _interopRequireDefault(_Toggler7);

var _Modal = require('./Togglers/Modals/Modal1');

var _Modal2 = _interopRequireDefault(_Modal);

var _Modal3 = require('./Togglers/Modals/Modal2');

var _Modal4 = _interopRequireDefault(_Modal3);

var _Modal5 = require('./Togglers/Modals/Modal3');

var _Modal6 = _interopRequireDefault(_Modal5);

var _Popup = require('./Togglers/Popups/Popup1');

var _Popup2 = _interopRequireDefault(_Popup);

var _Popup3 = require('./Togglers/Popups/Popup2');

var _Popup4 = _interopRequireDefault(_Popup3);

var _Card = require('./Cards/Card');

var _Card2 = _interopRequireDefault(_Card);

var _List = require('./Lists/List');

var _List2 = _interopRequireDefault(_List);

var _Table = require('./Tables/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    A: _A2.default,
    Block2: _TestBlock2.default,
    Wrapper: _Wrapper2.default,
    Holder: _Holder2.default,
    HR: _HR2.default,
    H11: _MainHeading2.default,
    H12: _MainHeading4.default,
    H13: _MainHeading6.default,
    H14: _MainHeading8.default,
    H15: _MainHeading10.default,
    H21: _Heading2.default,
    H22: _Heading4.default,
    H23: _Heading6.default,
    H24: _Heading8.default,
    H25: _Heading10.default,
    H31: _SubHeading2.default,
    H32: _SubHeading4.default,
    H33: _SubHeading6.default,
    H34: _SubHeading8.default,
    H35: _SubHeading10.default,
    H41: _SecondarySubHeading2.default,
    H42: _SecondarySubHeading4.default,
    H43: _SecondarySubHeading6.default,
    H44: _SecondarySubHeading8.default,
    H45: _SecondarySubHeading10.default,
    P: _Paragraph2.default,
    PLQ: _PLQ2.default,
    Button: _Button2.default,
    Image: _Image2.default,
    Figure: _Figure2.default,
    Hero: _Hero2.default,
    Navbar1: _Navbar2.default,
    Navbar2: _Navbar4.default,
    SubNavbar1: _SubNavBar2.default,
    SubNavbar2: _SubNavBar4.default,
    DropDownNav1: _DropDownNav2.default,
    DropDownNav3: _DropDownNav4.default,
    DropDownNav5: _DropDownNav6.default,
    Brand: _Brand2.default,
    Carousel: _Carousel2.default,
    Toggler1: _Toggler2.default,
    Toggler2: _Toggler4.default,
    Toggler3: _Toggler6.default,
    Toggler4: _Toggler8.default,
    Modal1: _Modal2.default,
    Modal2: _Modal4.default,
    Modal3: _Modal6.default,
    Popup1: _Popup2.default,
    Popup2: _Popup4.default,
    Card: _Card2.default,
    List: _List2.default,
    Table: _Table2.default
};