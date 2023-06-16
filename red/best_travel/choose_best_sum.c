#include "best_travel.h"

void    swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int     choose_best_sum(t_parameters *parameters) {
    if (parameters->list_of_distances_size < parameters->number_of_towns_to_visit)
        return (-1);

    int current_sum = 0;
    int highest_sum = 0;
    int *arr = parameters->list_of_distances;
    int size = parameters->list_of_distances_size;
    int count[size];
    for (int i = 0; i < size; i++) {
        count[i] = 0;
    }

    int i = 0;
    while (i < size) {
        if (count[i] < i) {

            if (i % 2 == 0) {
                swap(&arr[0], &arr[i]);
            } else {
                swap(&arr[count[i]], &arr[i]);
            }

            for (int j = 0; j < parameters->number_of_towns_to_visit; j++) {
                current_sum += arr[j];
            }

            if (current_sum > highest_sum &&
                current_sum <= parameters->maximum_sum_of_distances)
                highest_sum = current_sum;

            if (current_sum == parameters->maximum_sum_of_distances)
                return (current_sum);

            current_sum = 0;
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return (highest_sum);
}
