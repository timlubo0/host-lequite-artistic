import React from "react";
import { HomeProps, HomeState } from "./Types";
import { Form, Container, Nav, Navbar } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import Dropdown, { IDropdownItem } from "../../components/Dropdown";
import { withMediaQuery } from "../../hoc/withMediaQuery";


class Home extends React.Component<HomeProps, HomeState>{

    public state: Readonly<HomeState>;

    constructor(props: HomeProps){
        super(props);

        this.state = {
            images: [
                './images/woman.jpeg',
                './images/woman2.jpeg',
                './images/avatar.jpg'
            ],
            activeImage: './images/woman2.jpeg',
            color: '',
            size: 0,
            activeColor: 1
        };
    }


    render(): React.ReactNode {

        const { isDesktop } = this.props;
        const { activeColor, activeImage, images } = this.state;

        return(
            <div>
                <div className="flex">
                    <Icon path={mdiArrowLeft}
                        title="Back"
                        size={1}
                        color="#fff"
                        className="flex-1"
                        style={{ marginLeft: isDesktop ? -150 : 0, marginTop: 10 }}
                    />
                    <Icon path={mdiArrowRight}
                        title="Next"
                        size={1}
                        color="#fff"
                        className="flex-1"
                        style={{ marginLeft: isDesktop ? 450 : 0, marginTop: 10 }}
                    />
                </div>
                <div style={styles.container} className={isDesktop ? 'flex items-center justify-center h-screen pl-20 ml-20' : ''}>
                
                    <div style={{ width: 1000, height: 600 }} className="flex items-center">

                        <div>
                            {
                                images.map((uri) => (
                                    <div style={{ width: "3em", height: 70 }} className="mb-1 mr-5">
                                        <button onClick={() => this.setState({ activeImage: uri })}>
                                            <img src={uri} alt="woman" className={ uri !== activeImage ? 'brightness-50': '' } />
                                        </button>
                                    </div>
                                ))
                            }
                        
                        </div>

                        <div style={{ width: "19em", height: 450, paddingRight: 10, border: '1px solid #BDBDBD' }}>
                            <img src={activeImage} alt="woman" style={{ marginLeft: -10, marginTop: -7 }} />
                        </div>

                    </div>
                    <div style={{ marginLeft: 50, marginTop: "-7%" }}>
                        <div className="flex">
                            <h4 className="text-white">Host Lequite Artistic</h4>
                            <div className={`${ isDesktop ? 'flex ml-20' : 'ml-10' }`}>
                                {
                                    isDesktop && <span className="text-white text-xs">Xels trends</span>
                                }
                                <div style={{ width: '1em', height: '1em' }} className="ml-2 rounded-full overflow-hidden">
                                    <img src="./images/avatar.jpg" alt="woman" />
                                </div>

                                {
                                    !isDesktop && <span className="text-white text-xs">Xels trends</span>
                                }
                            </div>
                        </div>
                        <span className="text-white text-xs">Formal Wears . Available . 100 % Cotton</span>

                        <div>
                            <span className="text-xs text-white">Select color</span>
                            <div className="flex">
                                <div className={ activeColor === 1 ? 'border border-white rounded-full mr-2' : 'mr-2' } style={styles.radio}>
                                    <input 
                                        type='radio'
                                        style={{ accentColor: 'red', position: 'relative', left: '25%' }}
                                        checked
                                        onClick={() => this.setState({ activeColor: 1 })}
                                    />
                                </div>
                                <div className={ activeColor === 2 ? 'border border-white rounded-full mr-2' : 'mr-2' } style={styles.radio}>
                                    <input 
                                        type='radio'
                                        style={{ accentColor: '#24B6AD', position: 'relative', left: '25%' }}
                                        checked
                                        onClick={() => this.setState({ activeColor: 2 })}
                                    />
                                </div>

                                <div className={ activeColor === 3 ? 'border border-white rounded-full mr-2' : 'mr-2' } style={styles.radio}>
                                    <input
                                        type='radio'
                                        style={{ accentColor: '#FFBA02', position: 'relative', left: '25%' }}
                                        checked
                                        onClick={() => this.setState({ activeColor: 3 })}
                                    />
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-white">Select size</span>
                            <span className="text-xs ml-5" style={{ color: 'red' }}>Size guide</span>
                            <div className="flex mb-3">
                                <div className="bg-gray-400 rounded text-center" style={styles.size}>
                                    <button className="text-xs">32</button>
                                </div>
                                <div className="bg-dark rounded text-center" style={{...styles.size, ...{border: '1px solid #BDBDBD'}}}>
                                    <button className="text-xs text-white">42</button>
                                </div>
                                <div className="bg-dark rounded text-center" style={{...styles.size, ...{border: '1px solid #BDBDBD'}}}>
                                    <button className="text-xs text-white">56</button>
                                </div>
                                
                                <div className="rounded text-center" style={{ ...styles.size, ...{ backgroundColor: '#24B6AD' } }}>
                                    <button className="text-xs text-white">12</button>
                                </div>
                            </div>

                        </div>

                        <div style={{ width: "70%" }}>
                            <p className="text-white text-ellipsis text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <Navbar variant="dark" bg="dark" expand="sm" className="w-50 border border-white">
                            <Container fluid>
                                <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                <Dropdown title="Option 1" items={dropdownOptions}/>
                                <Dropdown title="Option 2" items={dropdownOptions}/>
                                <Dropdown title="Option 3" items={dropdownOptions}/>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
            </div>
            </div>
        )
    }


}

const dropdownOptions: IDropdownItem[] = [
    {
        id: '23-jdj-949',
        name: 'Wedding Clothes',
        url: '#'
    },
    {
        id: '23-jdj-94910',
        name: 'Summer Wears',
        url: '#'
    },
    {
        id: '23-jdj-94911',
        name: 'Play Suits',
        url: '#'
    },
    {
        id: '23-jdj-94912',
        name: 'Night Gowns',
        url: '#'
    }
]


const styles = {
    container: {
        backgroundColor: '#1A202C'
    },

    thumbnail: {
        width: '5%'
    },

    mainImageContainer: {
        border: '1px solid #fff',
        padding: 5,
        width: 100
    },

    mainImage: {
        width: '50%',
        'object-fit': 'cover'
    },

    size: {
        width: 20,
        marginLeft: 5
    },

    radio: {
        width: 25, 
        height: 25
    },
    radioSelected: {
        position: 'relative', 
        left: '25%'
    }
}

export default withMediaQuery(Home);