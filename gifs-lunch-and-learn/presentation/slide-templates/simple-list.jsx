import React from 'react';
import PropTypes from 'prop-types';
import { Appear, List, ListItem, Slide, Notes } from 'spectacle';
import styled from 'styled-components';
import MainHeading from '../components/main-heading.jsx';


const SimpleList = ({ heading, listItems }) => {
    const StyledList = styled(List)`
        list-style: none;
    `;
    const StyledListItem = styled(ListItem)`
        font-weight: 300;
        list-style: none;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        &:before {

        }
    `;
    return (
        <Slide
            bgColor="primary"
            align="flex-start"
        >
            <Notes>
                <h4>Slide notes</h4>
                <ol>
                    <li>First note</li>
                    <li>Second note</li>
                </ol>
            </Notes>
            {heading ? (
                <MainHeading>
                    {heading}
                </MainHeading>
            ) : null}
            <StyledList>
                {listItems.map((item, i) => (
                    <Appear key={i}>
                        <StyledListItem>
                            {item}
                        </StyledListItem>
                    </Appear>
                ))}
            </StyledList>
        </Slide>
    )
};

SimpleList.propTypes = {
    heading: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimpleList;
