import React from 'react';
import Google from '../components/pageComponents/recyclePage/GoogleMaps'
import Carousel, {CarouselItem} from '../components/pageComponents/recyclePage/Carousel';
import { 
EntryContent,
Hero,
RecycleTitle,
MapBox,
PageContainer,
WrapperContain,
WrapperContent,
WrapperDescription,
WrapperButton


} from '../components/stylePages/StyleRecycle';


function Recycle() {
    return (
      <PageContainer>

       <Hero>
       <RecycleTitle>
                    Recycle with us <br />
                    step by step:
                </RecycleTitle>
            <EntryContent>
                
                <Carousel>
                    <CarouselItem>
                        <p>Collect all your toys
                        and put them in a bag/box.</p>
                    </CarouselItem>
                    
                    <CarouselItem>
                        <p>2. Come to one of our
                        drop-off points</p>
                    </CarouselItem>
                    
                    <CarouselItem>
                        <p>3. Hand in your toys</p>
                    </CarouselItem>
                </Carousel> 
            </EntryContent>
        </Hero>
        
        <MapBox>
            <Google/>
        </MapBox>

        <WrapperContent>
            <WrapperContain>
                <WrapperDescription>
                    <h2>Our places</h2>
                        <tr>
                            <td >Havsgatan 30</td>
                            <td >Havsgatan 30</td>
                            <td >Havsgatan 30</td>
                        </tr>
                        <tr>
                        <td>Havsgatan 30</td>
                        <td>Havsgatan 30</td>
                        <td>Havsgatan 30</td>
                        </tr>
                </WrapperDescription>

                <WrapperDescription>
                    <div>
                        <h3>Do you have items other than 
                        toys that you want to recycle?
                        Check out our partner!
                        </h3>
                    </div>
                    <WrapperButton>SRV</WrapperButton>

                </WrapperDescription>
            </WrapperContain>



        </WrapperContent>
           


        </PageContainer>
    )};
    


export default Recycle;