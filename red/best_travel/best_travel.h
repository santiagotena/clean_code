#pragma once

//Libraries//
#include "stdbool.h"
#include "stdio.h"
#include "stdlib.h"
#include "string.h"

//Macros//
#define ERR_INVALID_ARGC            "Error: Invalid number of arguments\n"
#define ERR_INVALID_MAX_DISTANCE    "Error: The maximum sum of distances must be at least zero.\n"
#define ERR_INVALID_TOWN_NUMBER     "Error: The number of towns to visit must be at least 1.\n"
#define ERR_INVALID_LIST            "Error: No negative numbers are allowed in the list_of_distances\n"
#define ERR_NOT_ENOUGH_DISTANCES    "Error: There were not enough distances provided.\n"

#define VALID_INPUT_EXAMPLE         "Please provide: <maxium_sum_of_distances> <number_of_towns_to_visit> <list_of_distances>\n"

//Structs//
typedef struct  s_parameters {
    int         maximum_sum_of_distances;
    int         number_of_towns_to_visit;
    int         *list_of_distances;
    int         list_of_distances_size;
}               t_parameters;

typedef struct  s_sum {
    int         highest_sum;
    int         current_sum;
}               t_sum;

//Functions//
//Parsing
bool    is_input_valid(int argc, char **argv, t_parameters *parameters);
//Calculate
int     choose_best_sum(t_parameters *parameters);
//Display Results
void    display_results(int max_distance);