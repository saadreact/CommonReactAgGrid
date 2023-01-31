import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import { TableType } from "./Table.types";


// define defaults that can be used as a base for each story
const defaultArgs: TableType = {
	isDark: false,
	pagination: true,
	perPage: 10,
	rowData: [],
	columnDefs: [],
	filter: false,
	resizable: false,
	sortable: false,
};

export default {
	title: "Ag-Grid/Table",
	component: Table,
	argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

// in this story, show the table with some data
export const Primary = Template.bind({});

// in the args of each story, you can then override any defaults to suit this particular story
Primary.args = {
	...defaultArgs,
	isDark: false,
	rowData: [
    	{ make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    	{ make: "Nissan", model: "KDH", price: 32000, type: "van" },
    	{ make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
	],
	columnDefs: [
    	{ field: "make", },
    	{ field: "model" },
    	{ field: "price" },
    	{ field: "type" }
	],
	sortable: true,
	resizable: true,
	filter: true,
};

// another story, showing the table’s empty state
export const NoData = Template.bind({});
NoData.args = {
	...defaultArgs
};

// This function will generate lots of data, so that you can see how the table behaves when populated with many rows
function getData() {
	let data = [];
	for (let x = 0; x < 150; x++) {
    	data.push(
        	{
            	make: ["Toyota", "Nissan", "Kia"][Math.floor(Math.random() * 3)],
            	model: ["Celica", "KDH", "Sorento"][Math.floor(Math.random() * 3)],
            	price: Math.floor(Math.random() * 100000) + 25000,
            	type: ["sedan", "van", "jeep"][Math.floor(Math.random() * 3)]
        	});
	}
	return data;
};

export const LotsOfData = Template.bind({});
LotsOfData.args = {
	...defaultArgs,
	columnDefs: [
    	{ field: "make", },
    	{ field: "model" },
    	{ field: "price" },
    	{ field: "type" }
	],
	rowData: getData()
}

// this function will determine the cell’s styling, based on the value
const carPrice = (value: number) => {
    return { color: value > 50000 ? "#FF5733" : "#00E676" };
};


export const CustomCellRender = Template.bind({});
CustomCellRender.args = {
    ...defaultArgs,
    isDark: false,
    rowData: [
        { make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
        { make: "Nissan", model: "KDH", price: 32000, type: "van" },
        { make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
    ],
    // In the columnDefs, you can provide the above functions to enable custom styling and rendering based on the value of the cells 
    columnDefs: [
        { field: "make" },
        { field: "model" },
        { field: "price",
          cellStyle: (params: any) => {
            return carPrice(params.value);
          },
        },
    ]

};