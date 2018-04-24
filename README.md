# react-stylux

Please see (react-stylux Website)[https://foxdesignagency.com/react-stylux] for updates and documentation (Still being worked on)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. For more information pelase refer to the website.

### Prerequisites

```
npm install --save react-stylux
```

## How To Use Stylux
### Table of Contents
- [Known Bugs](#known-bugs)
- [Feature Wish List](#feature-wish-list)
- [Acknowledgments](#acknowledgments)
- [Changelog](https://foxdesignagency.com/react-stylux/changelog)


## Documentation:

Please see (React-stylux)[https://foxdesignagency.com/react-stylux/documentation]


### Text Specific

#### Headings (all names subject to change)
large size:
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

medium size: (not correct calculations)
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

small size: (not correct calculations)
Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

#### Paragraphs (all names subject to change)

Each of these paragraphs follow a specific pattern:
Large size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333
medium size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333
small size:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333

### Image Specific

There are currently six predefined image sizes.
Large Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Medium Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

Small Sizes:
Non Rectangle Image sizes:
* tn - 50px X 50px
* exsm - 90px X 90px
* sm - 150px X 150px
* md - 300px X 300px
* lg - 500px X 500px
* exlg - 700px X 700px

Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 81px X 50px
* sm - 243px X 150px
* md - 485px X 300px
* lg - 809px X 500px
* exlg - 1137px X 700px

Tall Rectangle Image Sizes:
* tn - 50px X 50px (Not finished)
* exsm - 50px X 81px
* sm - 150px X 243px
* md - 300px X 485px
* lg - 500px X 809px
* exlg - 700px X 1137px

#### Heroes
These were made to integrate with the Carousels, but can be used where ever.

##### Hero1
```
<Hero1
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'cover'
    width = '100%'
    height = 'inherit'
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero1
    image={`url(${image})`}>
    ?
    ?
    ?
</Hero1>
```


##### Hero2
**Not Finished**
```
<Hero2
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    imageSize = 'contain 80%'
    width = '100%'
    height = 'inherit'
    bottomBoxWidth = '100%'
    bottomBoxHeight = '25%'
    bottomBoxPadding
    bottomBoxBackgroundColor = 'rgba(0, 0, 0, 0.5)'
    heroid
    bottomid
    heroClassName
    bottomClassName
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts one child and a background
```
<Hero2
    image={`url(${image})`}>
    ?
</Hero2>
```


##### Hero3
**Not Finished**
```
<Hero3
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero3
    image={`url(${image})`}>
    ?
</Hero3>
```


##### Hero4
```
<Hero4
    background
    image
    imageRepeat = 'no-repeat'
    backgroundPosition = 'center'
    backgroundSize = 'cover'
    width = '100%'
    height
    id
    className
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts three children and a background
```
<Hero4
    image={`url(${image})`}>
    ?
</Hero4>
```


##### Hero5
```
<Hero5
    background
    image
    imageRepeat
    backgroundPosition
    backgroundSize
    width 
    height
    smdis = 'flex'
    mddis = 'flex'
    >
```
This accepts seven children and a background
```
<Hero5
    image={`url(${image})`}>
    ?
    ?
    ?
    ?
    ?
    ?
    ?
</Hero5>
```

##### Navbar2
**Still Working on**
```
<Navbar2
    left: '-100px'
    >
```
This currently accepts nine children and renders them.
responsiveness not set
```
<Navbar2>

</Navbar2>
```

#### SubNavBars

##### SubNavBar1
**Still working on**
```
<SubNavbar1
    position = 'sticky'
    top = '-1px'
    left
    right
    bottom
    zIndex= '200'
    font = 'serif'
    totalWidth = '100%'
    navbarWidth = '100%'
    height
    display = 'flex'
    direction = 'row'
    align = 'center'
    columnAlign = 'center'
    margin = '0'
    padding = '0'
    itemSpacing = '10px 0'
    mainBackground = 'black'
    itemBackground = 'inherit'
    color = 'whitesmoke'
    fontSize = 0.9em
    fontWeight = '100'
    fontVariant = 'none'
    navid
    itemsid
    navClassName
    listClassName
    itemsClassName
    smDis = 'none'
    mdDis ='flex'
    >
```
This accepts unlimited? children and renders them.
```
<SubNavbar1
    navbarWidth='70%'>
    <a href=''>Item1</a>
    <a href=''>Item2</a>
    <a href=''>Item3</a>
    <a href=''>Item4</a>
</SubNavbar1>
```
##### SubNavBar2
**will be added soon**


#### DropDownNavs (There needs to be an accesibility rework)

##### DropDownNav1
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav1
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 0 5px 5px'
    offset
    color = 'black'
    textAlign = 'left'
    margin
    padding
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A downward pointing arrow is rendered after title
```
<DropDownNav1>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav1>
```


##### DropDownNav3
**will be added soon**


##### DropDownNav5
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav5
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 5px 5px 0'
    offset
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A sideways pointing arrow is rendered after title
```
<DropDownNav5>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav5>
```

### List Specific (possible rework expected)

#### Number List

##### NumberList1
```
<NumberList1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'decimal'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    id
    className
    >
```
This accepts unlimited? children split with \
```
<NumberList1>
    {'item1'}
    {'item2'}
    {'item3'}
</NumberList1>
```


##### NumberList2
**Not Finished**
```
<NumberList1
    listAmount = '1'
    id
    className
    >
```
This accepts unlimited? children split by the listAmount
```
<NumberList2>
    item1
    item2
    item3
</NumberList2>
```


##### NumberList3
```
<NumberList3
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'upper-roman'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    id
    className
    >
```
This accepts unlimited? children split with \
```
<NumberList3>
    {'item1'}
    {'item2'}
    {'item3'}
</NumberList3>
```


#### Bullet List

##### BulletList1
**Not Finished**
```
<BulletList1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'disc'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    itemPadding
    itemBGImage
    itemBGSize
    id
    className
    >
```
This accepts unlimited? children split with \
```
<BulletList1>
    {'item1'}
    {'item2'}
    {'item3'}
</BulletList1>
```


##### BulletList2
**Not Finished**
```
<BulletList2
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = "1.5em"
    weight = '400'
    paddingLeft
    listStyleType = 'square'
    listStyleImage = 'none'
    listStylePosition = 'inside'
    itemPadding
    itemBGImage
    itemBGSize
    id
    className
    >
```
This accepts unlimited? children split with \
```
<BulletList1>
    {'item1'}
    {'item2'}
    {'item3'}
</BulletList1>
```
#### Tables


##### Table1
**Not Finished**
```
<Table1
    columns="3"
    rows= "3"
    head
    body
    tableId
    mainId
    mainClassName
    tableClassName

    hbordertop
    hborderRight
    hborderBottom
    hborderLeft
    hborder = '1px solid black'
    hvertical = 'center'
    headWidth
    headHeight
    headMargin
    headPadding = '5px'

    dbordertop
    dborderRight
    dborderBottom
    dborderLeft
    dborder = '1px solid black'
    dwidth
    dheight
    dmargin
    dpadding = '5px'

    tbordertop
    tborderRight
    tborderBottom
    tborderLeft
    tborder = '1px solid black'
    tmargin ='5px'
    tpadding
    tableWidth
    tableHeight
    borderCollaspe = 'collaspe'
    >
```
This accepts unlimited? children and renders based on column and row values
```
<Table1>
    {'head1'}
    {'head2'}
    {'head3'}
    {'body1'}
    {'body2'}
    {'body3'}
    {'body4'}
    {'body5'}
    {'body6'}
</Table1>
```
##### Table2
**Not Finished**
```
<Table2
    columns="3"
    rows= "3"
    body
    tableId
    mainId
    mainClassName
    tableClassName

    dbordertop
    dborderRight
    dborderBottom
    dborderLeft
    dborder = '1px solid black'
    dwidth
    dheight
    dmargin
    dpadding = '5px'

    tbordertop
    tborderRight
    tborderBottom
    tborderLeft
    tborder = '1px solid black'
    tmargin ='5px'
    tpadding
    tableWidth
    tableHeight
    borderCollaspe = 'collaspe'
    >
```
This accepts unlimited? children and renders based on column and row values
```
<Table2>
    {'head1'}
    {'body1'}
    {'body2'}
    {'head2'}
    {'body3'}
    {'body4'}
    {'head3'}
    {'body5'}
    {'body6'}
</Table2>
```

## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

Contribution form and system is currently being thought through. No contributions will currently be accepted outside of Fox Design Agency until system is put into place.


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give acknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object
* Massive credit for the animations to Daniel Eden - animate.css - http://daneden.me/animate
* A Huge thanks to www.w3schools.com and their awesome tutorials, many first draft items were created with those

## Changelog
For a complete listing of changes, please go to [Stylux Changelog](https://foxdesignagency.com/react-stylux/changelog)