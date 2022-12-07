import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'Roboto', src: `${process.env.PUBLIC_URL}/fonts/bpg_glaho_sylfaen.ttf`});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    fontFamily: 'Roboto'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

interface IMyDocumentProps {
  fullName?: string;
}

// Create Document Component
const MyDocument = ({ fullName }: IMyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>გადაეცემა {fullName}ს მასზედ, რომ ის ირიცხება სულხან კვერნაძის სახელობის უნივერსიტეტში</Text>
        {/* <Text>{fullName}</Text> */}
      </View>
    </Page>
  </Document>
);

export default MyDocument;