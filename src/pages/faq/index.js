import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Container } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

import faqs from '../../Json/FaqList'
import { Layout } from '../../components'

const useClasses = makeStyles({
    question: {
        fontSize: 30,
        padding: '10px 0px',
        fontWeight: 500,
    },
})

const FaqPage = () => {
    const classes = useClasses()
    return (
        <Layout>
            <Container>
                <Box>
                    <Typography variant="h5">Вопросы по сайту </Typography>
                    <Typography variant="h6" style={{ marginBottom: 20 }}>ответы от тех.поддержки</Typography>
                    {faqs.map((faq, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.question} >{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.answer}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </Box>
            </Container>
        </Layout>
    );
};

export default FaqPage