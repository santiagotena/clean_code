#include "best_travel.h"

bool    is_input_valid(int argc, char **argv, t_parameters *parameters) {
    if (argc < 4) {
        printf("%s%s", ERR_INVALID_ARGC, VALID_INPUT_EXAMPLE);
        return (false);
    }

    parameters->maximum_sum_of_distances = atoi(argv[1]);
    if (parameters->maximum_sum_of_distances < 0) {
        printf("%s%s", ERR_INVALID_MAX_DISTANCE, VALID_INPUT_EXAMPLE);
        return (false);
    }

    parameters->number_of_towns_to_visit = atoi(argv[2]);
    if(parameters->number_of_towns_to_visit < 1) {
        printf("%s%s", ERR_INVALID_TOWN_NUMBER, VALID_INPUT_EXAMPLE);
        return (false);
    }

    int index = 0;
    int list_size = argc - 3;
    parameters->list_of_distances = calloc(list_size, sizeof (int));
    for (int i = 3; i < argc; i++) {
        parameters->list_of_distances[index] = atoi(argv[i]);
        index++;
    }
    for (int i = 0; i < list_size; i++) {
        if (parameters->list_of_distances[i] < 0) {
            printf("%s%s", ERR_INVALID_LIST, VALID_INPUT_EXAMPLE);
            return (false);
        }
    }

    return (true);
}