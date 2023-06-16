#include "best_travel.h"

bool    are_enough_arguments(int argc) {
    if (argc < 4) {
        printf("%s%s", ERR_INVALID_ARGC, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

bool    maximum_sum_of_distances_is_positive(char **argv, t_input *input) {
    input->maximum_sum_of_distances = atoi(argv[1]);
    if (input->maximum_sum_of_distances < 0) {
        printf("%s%s", ERR_INVALID_MAX_DISTANCE, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

bool    are_enough_towns_to_visit(char **argv, t_input *input) {
    input->number_of_towns_to_visit = atoi(argv[2]);
    if(input->number_of_towns_to_visit < 1) {
        printf("%s%s", ERR_INVALID_TOWN_NUMBER, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

void    assign_list_of_distances(int argc, char **argv, t_input *input) {
    int index = 0;
    input->list_of_distances_size = argc - 3;
    input->list_of_distances = calloc(input->list_of_distances_size, sizeof (int));
    for (int i = 3; i < argc; i++) {
        input->list_of_distances[index] = atoi(argv[i]);
        index++;
    }
}

bool    distances_are_valid(int argc, char **argv, t_input *input) {
    assign_list_of_distances(argc, argv, input);
    for (int i = 0; i < input->list_of_distances_size; i++) {
        if (input->list_of_distances[i] < 0) {
            printf("%s%s", ERR_INVALID_LIST, VALID_INPUT_EXAMPLE);
            return (false);
        }
    }
    return (true);
}

bool    is_input_valid(int argc, char **argv, t_input *input) {
    if (are_enough_arguments(argc) &&
        maximum_sum_of_distances_is_positive(argv, input) &&
        are_enough_towns_to_visit(argv, input) &&
        distances_are_valid(argc, argv, input))
        return (true);
    return (false);
}
