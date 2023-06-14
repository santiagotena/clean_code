#pragma once

//Libraries//
#include "stdbool.h"
#include "stdio.h"
#include "stdlib.h"
#include "string.h"

//Macros//
#define ERR_INVALID_ARGC            "Error: Invalid number of arguments\n"
#define ERR_INVALID_MAX_DISTANCE    "Error: The maximum sum of distances must be greater than zero.\n"
#define ERR_INVALID_TOWN_NUMBER     "Error: The number of towns to visit must be at least 1.\n"
#define ERR_INVALID_LIST            "Error: No empty list of distances or negative numbers are allowed\n"

#define VALID_INPUT_EXAMPLE         "Please provide: <maxium_sum_of_distances> <number_of_towns_to_visit> <list_of_distances>\n"

//Structs//
typedef struct s_parameters
{
    unsigned int    maximum_sum_of_distances;
    unsigned int    number_of_towns_to_visit;
    int             *list_of_distances;

}						t_parameters;

//Functions//
//Parsing
bool    is_input_valid(int argc, char **argv, t_parameters parameters);

//Core
int     choose_best_sum(unsigned int maximum_sum_of_distances, unsigned int number_of_towns_to_visit, int *list_of_distances);

//Display Results