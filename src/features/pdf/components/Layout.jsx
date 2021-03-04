import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const section = StyleSheet.create({
    heading: {
        borderBottom: '1 solid #000000',
        fontFamily: 'Garamond Bold',
        fontSize: 12,
        marginTop: 16,
        textTransform: 'uppercase',
        paddingBottom: 2,
    },
    subSection: {
        marginTop: 8,
    },
});

const SectionHeading = ({ title }) => {
    return <Text style={section.heading}>{title}</Text>;
};

const SubSection = ({ children }) => {
    return <View style={section.subSection}>{children}</View>;
};

const sectionRow = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bold: {
        fontFamily: 'Garamond Bold',
    },
    italic: {
        fontFamily: 'Garamond Italic',
    },
});

const SubSectionRow = ({ type, fontSize, columnOne, columnTwo }) => {
    let styleType = null;

    switch (type) {
        case 'bold':
            styleType = sectionRow.bold;
            break;
        case 'italic':
            styleType = sectionRow.italic;
            break;
        default:
            throw new Error(
                `Unknown type '${type}' was passed to <SubSectionRow>.` +
                    `Only valid types are 'bold' and 'italic'.`
            );
    }

    let styleFontSize = null;
    if (typeof fontSize === 'string')
        switch (fontSize) {
            case 'sm':
                styleFontSize = {
                    fontSize: 12,
                };
                break;

            case 'med':
                styleFontSize = {
                    fontSize: 16,
                };
                break;

            case 'lg':
                styleFontSize = {
                    fontSize: 24,
                };
                break;

            default:
                throw new Error(
                    `Unknown fontSize '${type}' was passed to <SubSectionRow>.` +
                        `Only valid fontSizes are 'sm', 'med', 'lg', or a number.`
                );
        }
    else {
        styleFontSize = {
            fontSize: fontSize,
        };
    }

    return (
        <View style={[sectionRow.row, styleType, styleFontSize]}>
            <Text>{columnOne}</Text>
            <Text>{columnTwo}</Text>
        </View>
    );
};

export { SectionHeading, SubSection, SubSectionRow };
