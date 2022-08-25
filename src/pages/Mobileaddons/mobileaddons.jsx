import React from 'react'
import { AddonsBattelfield, AddonsPs4, AddonsSearch, BattelfieldCD, CardCross, MobileFilter, MobileSearch, Ps4cd, Search, SmallCross } from '../../assets'

import './mobileaddons.css'


import { Link } from 'react-router-dom'

const Mobileaddons = () => {
  return (
    <>
        <div className="mobile-freeaddons-container">
            <div className="mobile-freeaddons-heading-container">
                <div className="mobile-freeaddons-heading-content">
                        <p>Free addons</p>
                        <Link to="/productdetails"><img src={SmallCross} alt="" /></Link>
                </div>
            </div>

            
            <div className="mobile-freeaddons-selected-content">
                    <div className="freeaddons-selected-heading">
                        <p>Selected</p>
                        <p>2</p>
                    </div>

                    <div className="freeaddons-selected-cards">
                            <div className="freeaddons-selected-cards-one">
                                <img src={CardCross} alt="cardcross" className='freeaddons-cards-cross'/>
                                <img src={Ps4cd} alt="ps4" className='selected-cards'/>
                            </div>

                            <div className="freeaddons-selected-cards-two">
                                <img src={CardCross} alt="cardcross" className='freeaddons-cards-cross'/>
                                <img src={BattelfieldCD} alt="ps4" className='selected-cards'/>
                            </div>
                    </div>
                </div>

                <div className="mobile-freeaddons-search-container">
                        <div className="mobile-freeaddons-search-content">
                                <div className="mobile-freeaddons-search">
                                    <input type="search" name="addonsSearch" id="" placeholder='Search addons'/>
                                    <img src={AddonsSearch} alt="search" />
                                </div>

                                <img src={MobileFilter} alt="filter" />
                        </div>

                        <div className="mobile-freeaddons-cards-container">
                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>



                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>


                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsBattelfield} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>


                                <div className="mobile-freeaddons-cards">
                                    <img src={AddonsPs4} alt="ps4" />
                                    <button type="submit">Add</button>
                                </div>

                        </div>

                </div>
        </div>
    </>
  )
}

export default Mobileaddons