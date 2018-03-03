import React, { Component } from "react";
import { Grid } from "material-ui";
import Wrapper from "./Wrapper";
import { SwiggyLogoGray } from "./../Assets";

const Sections = [
    {
        name: "COMPANY",
        items: [
            { name: 'About us', link: "#" },
            { name: 'Team', link: "#" },
            { name: 'Careers', link: "#" },
            { name: 'Swiggy Blog', link: "#" }
        ]
    }, {
        name: "CONTACT",
        items: [
            { name: 'Help & Support', link: "#" },
            { name: 'Partner With Us', link: "#" },
            { name: 'Ride With Us', link: "#" },
            { name: 'Bug Bounty', link: "#" }
        ]
    },
    {
        name: "CONTACT",
        items: [
            { name: 'Terms & Conditions', link: "#" },
            { name: 'Refunds & Cancellation Policy', link: "#" },
            { name: 'Privacy Policy', link: "#" },
            { name: 'Offer Terms', link: "#" }
        ]
    }
];

const SocialLinks = [
    { link: "#", icon: "fa fa-facebook" },
    { link: "#", icon: "fa fa-pinterest-p" },
    { link: "#", icon: "fa fa-instagram" },
    { link: "#", icon: "fa fa-twitter" },
];
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterSection">
                <Wrapper>
                    <div className="SectionWrapper">

                        <Grid container spacing={0} justify='space-between' direction={"row"}>
                            {
                                Sections.map((SingleSection, i) => {
                                    return (
                                        <Grid key={i} item>
                                            <div className="FooterSectionHead">{SingleSection.name}</div>
                                            <ul className="FooterSectionList">
                                                {
                                                    SingleSection.items.map((Items, j) => {
                                                        return (
                                                            <li key={j}>
                                                                <a href={Items.link}>{Items.name}</a>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                    <hr />
                    <Grid container spacing={0} alignItems="center"
                        justify="space-between" direction={"row"}>
                        <Grid item xs>
                            <img width="150px" src={SwiggyLogoGray} alt="" />
                        </Grid>
                        <Grid item xs>
                            <div className="CopyWright">
                                &copy;2018 Swiggy
                           </div>
                        </Grid>

                        <Grid className="SocialList" item xs>
                            <ul>
                                {
                                    SocialLinks.map((SingleLink, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={SingleLink.link}>
                                                    <i className={SingleLink.icon} ></i>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </Grid>
                    </Grid>
                </Wrapper>
            </div>
        );
    }
};