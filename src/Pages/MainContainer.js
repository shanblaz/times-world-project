import React, { Component } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${index}`}
            aria-labelledby={`${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `${index}`,
        tabindex: `${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default class main extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 0,
            data: {}
        }
    }
    handleChange = (event,newId) => {
        this.setState({value: newId});
    };
    componentDidMount=()=>{
        this.setState({data: this.props.data})
    }

    decreaseCount = (dishIndex,index) => {
        let prevData = this.state.data
        if(prevData.table_menu_list[index].category_dishes[dishIndex].count){
            prevData.table_menu_list[index].category_dishes[dishIndex].count = (prevData.table_menu_list[index].category_dishes[dishIndex].count ? prevData.table_menu_list[index].category_dishes[dishIndex].count : 0) - 1;
            this.props.setCartCount(this.props.cartCount - 1)
        }
        this.setState({data: prevData})
        console.log(prevData.table_menu_list[index].category_dishes[dishIndex],'vvvvvv')

    }
    increaseCount = (dishIndex,index) => {
        let prevData = this.state.data
        this.props.setCartCount(this.props.cartCount + 1)
        prevData.table_menu_list[index].category_dishes[dishIndex].count = (prevData.table_menu_list[index].category_dishes[dishIndex].count ? prevData.table_menu_list[index].category_dishes[dishIndex].count : 0) + 1
        this.setState({data: prevData})

    }
    render() {
        return (
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs style={{overflow: 'auto'}} value={this.state.value} onChange={(event,newId)=>this.handleChange(event,newId)} aria-label="basic tabs example">
                    {this.state.data?.table_menu_list?.map((x,index)=>
                        <Tab label={x.menu_category} {...a11yProps(x.menu_category_id)} />
                    )}
                </Tabs>
            </Box>
            {this.state.data?.table_menu_list?.map((x,index)=>
                <TabPanel value={this.state.value} index={index}>
                    {x.category_dishes.map((dish,dishIndex)=>{
                        return <div id={dish.dish_id} className='w-100 d-flex border-bottom mb-3'>
                            <div className='col-9 d-flex'>
                                <div style={{padding: '0px 5px'}}>
                                    {dish.dish_Type === 2 ? <img alt="veg" style={{width: '15px'}} src='/images/grrend.png'/> : <img alt='non veg' style={{width: '15px'}} src='/images/redd.png'/>}
                                </div>
                                <div className='w-100'>
                                    <div style={{fontWeight: '600'}} className='text-start'>
                                        {dish.dish_name}
                                    </div>
                                    <div style={{fontWeight: '500'}} className='d-flex justify-content-between'>
                                        <div>
                                            {dish.dish_currency + " " + dish.dish_price}
                                        </div>
                                        <div>
                                            {dish.dish_calories + " Calories"}
                                        </div>
                                    </div>
                                    <div style={{fontSize: '12px',color: 'grey'}} className='text-start'>
                                        {dish.dish_description}
                                    </div>
                                    <div className='text-start'>
                                        {dish.dish_Availability ? <div className="fd-add-sbs mobile-fd-add-sbs">
                                            <div className="fd-subtract" >
                                                <RemoveIcon onClick={()=> this.decreaseCount(dishIndex,index)}/>
                                            </div>

                                            <div className="fd-counter">{dish.count ? dish.count : 0}</div>
                                            <div className="fd-add">
                                                <AddIcon onClick={()=> this.increaseCount(dishIndex,index)}/>
                                            </div>
                                        </div>:<div style={{color: 'red'}}>Not available</div>}
                                    </div>
                                </div>
                            </div>
                            <div style={{height: '100px'}} className='col-3 d-flex justify-content-end'>
                                <div style={{height: '80px', width: '130px', overflow: 'hidden', borderRadius: '10px'}}>
                                    <img alt='dishes' style={{width: '100%', borderRadius: '5px'}} src={dish.dish_image}/>
                                </div>
                            </div>
                        </div>
                    })}
                </TabPanel>
            )}
        </Box>
        )
    }
}
