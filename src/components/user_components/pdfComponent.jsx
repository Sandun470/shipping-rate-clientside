import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Blogo from '../../assets/blogo.png';


const PdfComponentTemp = ({ referenceNumber, deliveryType, packageType, country, weight, services, tableData, totalActualWeight, totalVolumetricWeight, dateTime }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image src={Blogo} style={styles.logo} />
                <Text style={styles.headerText}>Shipping Rates</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Ref. Number: {referenceNumber}</Text>
                <Text style={styles.label}>Type of Delivery: {deliveryType}</Text>
                <Text style={styles.label}>Type of Package: {packageType}</Text>
                <Text style={styles.label}>Country: {country}</Text>
                <Text style={styles.label}>Total Weight: {weight}Kg</Text>
            </View>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Service</Text>
                    <Text style={styles.tableHeader}>Rate</Text>
                </View>
                {services.map((service, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{service.name}</Text>
                        <Text style={styles.tableCell}>{service.rate}</Text>
                    </View>
                ))}
            </View>
            {tableData && tableData.length > 0 && (
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>No.</Text>
                        <Text style={styles.tableHeader}>Length (cm)</Text>
                        <Text style={styles.tableHeader}>Width (cm)</Text>
                        <Text style={styles.tableHeader}>Height (cm)</Text>
                        <Text style={styles.tableHeader}>Actual Gross Weight (Kg)</Text>
                        <Text style={styles.tableHeader}>Volumetric Weight (Kg)</Text>
                    </View>
                    {tableData.map((row, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{row.id}</Text>
                            <Text style={styles.tableCell}>{row.length}</Text>
                            <Text style={styles.tableCell}>{row.width}</Text>
                            <Text style={styles.tableCell}>{row.height}</Text>
                            <Text style={styles.tableCell}>{row.actualGrossWeight}</Text>
                            <Text style={styles.tableCell}>{row.volumetricWeight}</Text>
                        </View>
                    ))}
                    <View style={styles.tableRow}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.tableCellBold}>{totalActualWeight}</Text>
                        <Text style={styles.tableCellBold}>{totalVolumetricWeight}</Text>
                    </View>
                </View>
            )}
            <View style={styles.footer}>
                <Text>Date: {dateTime}</Text>
                <Text>Approval</Text>
            </View>
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    label: {
        fontSize: 10,
        marginBottom: 5,
    },
    table: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#000000',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeader: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        backgroundColor: '#D3D3D3',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    tableCell: {
        flex: 1,
        fontSize: 10,
        padding: 5,
        textAlign: 'center',
    },
    tableCellBold: {
        flex: 1,
        padding: 5,
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        border: 1
    },
    totalLabel: {
        flex: 4,
        padding: 5,
        fontSize: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        border: 1
    },
    footer: {
        marginTop: 'auto',
        fontSize: 10,
        padding: 5,
        paddingTop: 60,
        borderTopWidth: 1,
        borderColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default PdfComponentTemp;
