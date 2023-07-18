import Head from "next/head";
import React from "react";

const MetaHead = ({ title }: { title: string }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Создай свое уникальное резюме!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

        </Head>
    );
};

export default MetaHead;