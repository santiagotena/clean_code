#include "best_travel.h"

bool    are_enough_arguments(int argc) {
    if (argc < 4) {
        printf("%s%s", ERR_INVALID_ARGC, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

bool    max_distance_is_positive(char **argv, t_input *input) {
    input->max_distance = atoi(argv[1]);
    if (input->max_distance < 0) {
        printf("%s%s", ERR_INVALID_MAX_DISTANCE, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

bool    are_enough_towns_to_visit(char **argv, t_input *input) {
    input->towns_to_visit = atoi(argv[2]);
    if(input->towns_to_visit < 1) {
        printf("%s%s", ERR_INVALID_TOWN_NUMBER, VALID_INPUT_EXAMPLE);
        return (false);
    }
    return (true);
}

void    assign_distances(int argc, char **argv, t_input *input) {
    int index = 0;
    input->distances_size = argc - 3;
    input->distances = calloc(input->distances_size, sizeof (int));
    for (int i = 3; i < argc; i++) {
        input->distances[index] = atoi(argv[i]);
        index++;
    }
}

bool    distances_are_valid(int argc, char **argv, t_input *input) {
    assign_distances(argc, argv, input);
    for (int i = 0; i < input->distances_size; i++) {
        if (input->distances[i] < 0) {
            printf("%s%s", ERR_INVALID_LIST, VALID_INPUT_EXAMPLE);
            return (false);
        }
    }
    return (true);
}

bool    is_input_valid(int argc, char **argv, t_input *input) {
    if (are_enough_arguments(argc) &&
        max_distance_is_positive(argv, input) &&
        are_enough_towns_to_visit(argv, input) &&
        distances_are_valid(argc, argv, input))
        return (true);
    return (false);
}
