# Compilation
NAME 	= best_travel
CC 		= cc
CFLAGS 	= -Wextra -Wall -Werror
#DEBUG 	= -g -fsanitize=address

# Clean
RM = rm -rf

# Source and object files
SRC =	choose_best_sum.c \
		display_results.c \
		is_input_valid.c \
		main.c

OBJ	=	$(SRC:.c=.o)

# Colors
GREEN	:= \x1b[32m
RESET	:= \033[0m

# Rules
all: $(NAME)

$(NAME): $(OBJ)
	$(CC) $(CFLAGS) $(DEBUG) $(OBJ) -o $(NAME)
	@echo "$(GREEN)Compiled the <$(NAME)> executable.$(RESET)"

clean:
	@$(RM) $(OBJ)
	@echo "$(GREEN)Object files removed.$(RESET)"

fclean: clean
	@$(RM) $(NAME)
	@echo "$(GREEN)Removed executable.$(RESET)"

re: fclean all

.SILENT: $(OBJ)
.PHONY: all clean fclean re