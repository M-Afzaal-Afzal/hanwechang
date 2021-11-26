import React from 'react';
import {Box, Button, Container, Grid, Stack} from "@mui/material";
// import Image from 'next/image';
import ImagesSection from "./ImagesSection";
import Countdown from 'react-countdown';
import CountdownRenderer from './CountdownRenderer';

const HeroSection = () => {
    return (
        <Box sx={{
            position: 'relative',
        }}>



            <Box id={'about'} sx={{
                minHeight: '95vh',
                background: (theme) => theme.palette.primary.main,
                display: 'grid', placeContent: 'center',
            }}>


                <Container sx={{
                    zIndex: 10,
                }} maxWidth={'xxl'}>
                    <Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} xl={6}>
                                <Box sx={{textAlign: 'center'}}>
                                    <video style={{maxWidth: '30rem',margin: '0 auto'}} width={'100%'} height={'90%'} playsInline={true} autoPlay={true} loop={true}>
                                        <source src="https://fanggang.io/video/hero.mp4" type="video/mp4"/>
                                    </video>
                                </Box>
                            </Grid>
                            <Grid item xs={12} xl={6} sx={{
                                order: {
                                    xs: -5,
                                    xl: 0
                                },
                                mt: {
                                    xs: '2rem',
                                    xl: 0,
                                }
                            }}>
                                <Box sx={{display: 'grid', placeContent: 'center', height: '100%'}}>

                                    {/*<Typography sx={{*/}
                                    {/*    textAlign: {*/}
                                    {/*        xs: 'center',*/}
                                    {/*        xl: 'left',*/}
                                    {/*    },*/}
                                    {/*    mb: '1rem',*/}
                                    {/*}} textAlign={'left'} fontWeight={'bold'} color={'#fff'}*/}
                                    {/*            variant={'h1'}*/}
                                    {/*>*/}
                                    {/*    Fang Gang*/}
                                    {/*</Typography>*/}

                                    {/*<Typography sx={{*/}
                                    {/*    textAlign: {*/}
                                    {/*        xs: 'center',*/}
                                    {/*        xl: 'left',*/}
                                    {/*    },*/}
                                    {/*    mb: '1rem',*/}
                                    {/*}} color={'#fff'} variant={'body1'}*/}
                                    {/*>*/}
                                    {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus*/}
                                    {/*    consectetur*/}
                                    {/*    consequuntur distinctio dolor dolorem eius et incidunt inventore ipsam magnam*/}
                                    {/*    maxime*/}
                                    {/*    obcaecati, quam quibusdam, quis repellat sequi sunt, voluptas.*/}
                                    {/*</Typography>*/}

                                    <Box
                                        sx={{
                                            mx: 'auto',
                                            maxWidth: {
                                                xs: '30rem',
                                                'xl': '100%',
                                            },
                                        }}>
                                        {/*<Countdown*/}
                                        {/*    date={Date.now()}*/}
                                        {/*    renderer={CountdownRenderer}*/}
                                        {/*    zeroPadTime={2}*/}
                                        {/*/>*/}

                                        <Box>
                                            <Stack direction={'row'}
                                                   component={'h1'}
                                                   spacing={4}
                                                   sx={{
                                                       color: "#fff",
                                                       mx: 'auto',
                                                       // fontWeight: 'bold',
                                                       justifyContent: {
                                                           xs: 'center',
                                                           'xl': 'space-between',
                                                       },
                                                   }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        width: '110%',
                                                        background: '#444',
                                                        borderRadius:'8px',
                                                        px: '1rem',
                                                        py: '8px',
                                                        textAlign: 'center',
                                                    }}
                                                >

                                                    Price
                                                    <br/>

                                                    <Box as={'span'} sx={{
                                                        fontSize: '1.2rem',
                                                    }}>
                                                    0.05
                                                    </Box>

                                                </Box>

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        background: '#444',
                                                        borderRadius:'8px',
                                                        px: '1rem',
                                                        py: '8px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Minted <br/>
                                                    <Box as={'span'} sx={{
                                                        fontSize: '1.2rem',
                                                    }}>
                                                        9999
                                                    </Box>

                                                </Box>

                                            </Stack>
                                        </Box>

                                        <Box>
                                            <Stack direction={'row'}
                                                   component={'h1'}
                                                   spacing={4}
                                                   sx={{
                                                       color: "#fff",
                                                       mx: 'auto',
                                                       // fontWeight: 'bold',
                                                       justifyContent: {
                                                           xs: 'center',
                                                           'xl': 'space-between',
                                                       },
                                                   }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        width: '110%',
                                                        background: '#444',
                                                        borderRadius:'8px',
                                                        px: '1rem',
                                                        py: '8px',
                                                    }}
                                                >

                                                       MINT!

                                                </Box>

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        width: '25%',
                                                        background: '#444',
                                                        borderRadius:'8px',
                                                        px: '1rem',
                                                        py: '8px',
                                                    }}
                                                >
                                                    1

                                                </Box>

                                            </Stack>
                                        </Box>

                                        <Box sx={{
                                            textAlign: {
                                                xs: 'center',
                                                xl: 'left',
                                                mt: '2rem',
                                            }
                                        }}>
                                            <Button fullWidth variant={'contained'} sx={{
                                                background:"#444",
                                                '&:hover': {
                                                    background: '#444',
                                                }
                                            }}>
                                                Connect
                                            </Button>
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>

            </Box>

            <Box sx={{background: (theme) => theme.palette.primary.main}} pt={'3rem'}>
                <ImagesSection/>
            </Box>

        </Box>

    );
};

export default HeroSection;