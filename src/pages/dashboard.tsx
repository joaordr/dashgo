import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datatime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        // categories: [
        //     '2021-03-18T00:00:00.000Z',
        //     '2021-03-19T00:00:00.000Z',
        //     '2021-03-21T00:00:00.000Z',
        //     '2021-03-22T00:00:00.000Z',
        //     '2021-03-23T00:00:00.000Z',
        //     '2021-03-24T00:00:00.000Z',
        //     '2021-03-25T00:00:00.000Z',
        // ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }

    }
}

const series = [
    { name: 'series1', data: [31, 123, 23, 45, 23, 12, 32, 34, 54] }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["4", "8"]}
                        bg="gray.800"
                        borderRadius="8"
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box
                        p={["4", "8"]}
                        bg="gray.800"
                        borderRadius="8"
                    // pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>

    )
}