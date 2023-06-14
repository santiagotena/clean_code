#pragma once

//Libraries//
#include "stdio.h"
#include "stdbool.h"

//Macros//
#define ERR_INVALID_ARGC "Error: Invalid number of arguments\n"
#define ERR_INVALID_MAX_DISTANCE "Error: "
#define ERR_INVALID_TOWN_NUMBER
#define ERR_INVALID_LIST

#define VALID_INPUT_EXAMPLE "Please provide: <maxium_sum_of_distance> <number_of_towns_to_visit> <list of distances>\n"

//Functions//

//Parsing
bool    is_input_valid(int argc, char **argv);

//Core

//Display Results