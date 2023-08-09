import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { UserPortfolioProps } from '@/interfaces/user-portfolio.interface';
import PDFViewer = ReactPDF.PDFViewer;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#020617',
    },
    section: {
        color: "#fff",
        margin: 2,
        padding: 5,
        flexGrow: 1
    }
});


const PDFResume: React.FC<{ userPortfolio: UserPortfolioProps | null }> = ({ userPortfolio }) => {




    return (


        <Document>
            <Page size="A4" style={styles.page}>

                <View style={styles.section}>
                    <Text>artyom galay</Text>
                </View>
            </Page>
        </Document>

    );
};
export default PDFResume;
