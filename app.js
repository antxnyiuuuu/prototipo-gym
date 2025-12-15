// ==================== DATA SIMULATION ====================
const credentials = {
    user: { username: 'usuario', password: '1234' },
    admin: { username: 'admin', password: 'admin' }
};

const userData = {
    name: 'Juan Pérez',
    age: 28,
    weight: 75,
    height: 175,
    goal: 'Ganar masa muscular',
    plan: 'intermediate',
    lastUpdate: '2024-01-15'
};

const workoutPlans = {
    beginner: [
        { day: 'Lunes', focus: 'Pecho y Tríceps', exercises: ['Press de banca - 3x10', 'Aperturas con mancuernas - 3x12', 'Fondos en paralelas - 3x8', 'Extensiones de tríceps - 3x12'] },
        { day: 'Martes', focus: 'Espalda y Bíceps', exercises: ['Dominadas - 3x8', 'Remo con barra - 3x10', 'Curl con barra - 3x12', 'Curl martillo - 3x10'] },
        { day: 'Miércoles', focus: 'Descanso', exercises: ['Cardio ligero - 20min', 'Estiramientos - 15min'] },
        { day: 'Jueves', focus: 'Piernas', exercises: ['Sentadillas - 4x10', 'Prensa - 3x12', 'Curl femoral - 3x12', 'Extensiones - 3x12'] },
        { day: 'Viernes', focus: 'Hombros y Core', exercises: ['Press militar - 3x10', 'Elevaciones laterales - 3x12', 'Plancha - 3x60s', 'Abdominales - 3x20'] },
        { day: 'Sábado', focus: 'Cardio', exercises: ['Correr - 30min', 'Bicicleta - 20min', 'Estiramientos - 10min'] },
        { day: 'Domingo', focus: 'Descanso', exercises: ['Descanso activo', 'Caminata ligera - 30min'] }
    ],
    intermediate: [
        { day: 'Lunes', focus: 'Pecho y Tríceps', exercises: ['Press de banca - 4x8', 'Press inclinado - 3x10', 'Aperturas - 3x12', 'Fondos - 3x10', 'Extensiones tríceps - 3x12'] },
        { day: 'Martes', focus: 'Espalda y Bíceps', exercises: ['Dominadas - 4x8', 'Remo con barra - 4x8', 'Peso muerto - 3x6', 'Curl con barra - 3x10', 'Curl concentrado - 3x12'] },
        { day: 'Miércoles', focus: 'Piernas', exercises: ['Sentadillas - 4x8', 'Prensa - 4x10', 'Peso muerto rumano - 3x10', 'Curl femoral - 3x12', 'Pantorrillas - 4x15'] },
        { day: 'Jueves', focus: 'Hombros', exercises: ['Press militar - 4x8', 'Elevaciones laterales - 4x12', 'Elevaciones frontales - 3x12', 'Pájaros - 3x15', 'Encogimientos - 3x12'] },
        { day: 'Viernes', focus: 'Brazos y Core', exercises: ['Curl con barra - 4x10', 'Curl martillo - 3x12', 'Press francés - 4x10', 'Fondos - 3x12', 'Plancha - 3x90s'] },
        { day: 'Sábado', focus: 'Cardio HIIT', exercises: ['HIIT - 20min', 'Burpees - 3x15', 'Mountain climbers - 3x20', 'Jumping jacks - 3x30'] },
        { day: 'Domingo', focus: 'Descanso', exercises: ['Descanso completo', 'Estiramientos - 20min', 'Yoga - 30min'] }
    ]
};

const nutritionPlan = {
    meals: [
        { name: 'Desayuno', time: '8:00 AM', calories: 450, items: ['3 huevos revueltos', 'Avena con frutas', 'Café negro'] },
        { name: 'Snack AM', time: '11:00 AM', calories: 200, items: ['Batido de proteína', 'Plátano'] },
        { name: 'Almuerzo', time: '2:00 PM', calories: 600, items: ['Pechuga de pollo 200g', 'Arroz integral 150g', 'Ensalada verde', 'Aguacate'] },
        { name: 'Snack PM', time: '5:00 PM', calories: 250, items: ['Yogurt griego', 'Almendras 30g', 'Manzana'] },
        { name: 'Cena', time: '8:00 PM', calories: 500, items: ['Salmón 180g', 'Batata 150g', 'Brócoli al vapor', 'Aceite de oliva'] }
    ],
    dailyCalories: 2000,
    macros: { protein: 150, carbs: 200, fats: 65 }
};

const progressData = [
    { date: '2024-01-01', weight: 78, chest: 98, waist: 85, arms: 35 },
    { date: '2024-01-15', weight: 76.5, chest: 99, waist: 83, arms: 35.5 },
    { date: '2024-01-30', weight: 75, chest: 100, waist: 82, arms: 36 }
];

const adminUsers = [
    { id: 1, name: 'Juan Pérez', age: 28, weight: 75, height: 175, plan: 'intermediate', status: 'active', lastPayment: '2024-01-01', nextPayment: '2024-02-01' },
    { id: 2, name: 'María García', age: 25, weight: 60, height: 165, plan: 'beginner', status: 'active', lastPayment: '2024-01-05', nextPayment: '2024-02-05' },
    { id: 3, name: 'Carlos López', age: 32, weight: 85, height: 180, plan: 'intermediate', status: 'pending', lastPayment: '2023-12-15', nextPayment: '2024-01-15' }
];

// ==================== AUTHENTICATION ====================
function login(username, password) {
    if (username === credentials.user.username && password === credentials.user.password) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('userApp').style.display = 'flex';
        initUserApp();
    } else if (username === credentials.admin.username && password === credentials.admin.password) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminApp').style.display = 'flex';
        initAdminApp();
    } else {
        alert('Credenciales incorrectas');
    }
}

function quickLogin(type) {
    if (type === 'user') {
        login(credentials.user.username, credentials.user.password);
    } else {
        login(credentials.admin.username, credentials.admin.password);
    }
}

function logout() {
    document.getElementById('userApp').style.display = 'none';
    document.getElementById('adminApp').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    window.completedExercises = [];
    window.completedMeals = [];
    window.selectedWorkoutDay = undefined;
}

// ==================== USER PAGES ====================
const userPages = {
    home: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">¡Hola, ${userData.name}! 👋</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Bienvenido a tu espacio de entrenamiento</p>

            <div class="card mb-4" style="background: var(--primary-gradient); border: none;">
                <div style="padding: var(--spacing-lg);">
                    <h3 style="color: white; font-size: 1.3rem; margin-bottom: var(--spacing-sm);">Tu Objetivo</h3>
                    <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin: 0;">${userData.goal}</p>
                </div>
            </div>

            <div class="stats-grid mb-4">
                <div class="stat-card">
                    <div class="stat-icon" style="background: var(--primary-gradient);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="stat-value">${userData.weight}kg</div>
                    <div class="stat-label">Peso Actual</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: var(--success-gradient);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <div class="stat-value">${userData.height}cm</div>
                    <div class="stat-label">Altura</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Resumen Semanal</h3>
                </div>
                <div class="card-body">
                    <div class="flex-between mb-3">
                        <span style="color: var(--text-secondary);">Entrenamientos completados</span>
                        <span style="color: var(--accent-green); font-weight: 600;">5/7</span>
                    </div>
                    <div class="flex-between mb-3">
                        <span style="color: var(--text-secondary);">Calorías promedio</span>
                        <span style="font-weight: 600;">1,950 kcal</span>
                    </div>
                    <div class="flex-between">
                        <span style="color: var(--text-secondary);">Cambio de peso</span>
                        <span style="color: var(--accent-green); font-weight: 600;">-2kg</span>
                    </div>
                </div>
            </div>
        </div>
    `,

    training: () => {
        const todayIndex = new Date().getDay();
        const selectedDay = window.selectedWorkoutDay !== undefined ? window.selectedWorkoutDay : todayIndex;
        const selectedWorkout = workoutPlans.intermediate[selectedDay];
        const completedExercises = window.completedExercises || [];
        const completedCount = completedExercises.length;
        const totalExercises = selectedWorkout.exercises.length;
        const progressPercent = (completedCount / totalExercises) * 100;

        return `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Rutinas de Entrenamiento</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Plan personalizado basado en tus objetivos</p>

            <!-- Days Horizontal Scroll -->
            <div class="days-scroll-container">
                <div class="days-scroll">
                    ${workoutPlans.intermediate.map((workout, index) => `
                        <div class="day-chip ${index === selectedDay ? 'active' : ''} ${index === todayIndex ? 'today' : ''}" 
                             onclick="selectWorkoutDay(${index})">
                            <div class="day-name">${workout.day.substring(0, 3)}</div>
                            <div class="day-number">${index + 1}</div>
                            <div class="day-focus">${workout.focus.split(' ')[0]}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Selected Day Workout -->
            <div class="card mb-4">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">${selectedWorkout.day}</h3>
                        <p class="card-subtitle">${selectedWorkout.focus}</p>
                    </div>
                    ${selectedDay === todayIndex ? '<span class="badge badge-primary">Hoy</span>' : ''}
                </div>
                <div class="card-body">
                    <div class="flex-between mb-2">
                        <span style="color: var(--text-secondary);">Progreso</span>
                        <span style="font-weight: 600; color: var(--accent-green);">${completedCount}/${totalExercises} completados</span>
                    </div>
                    <div style="height: 8px; background: var(--glass-bg); border-radius: 10px; overflow: hidden; margin-bottom: var(--spacing-lg);">
                        <div style="height: 100%; background: var(--accent-green); width: ${progressPercent}%; transition: width 0.3s ease;"></div>
                    </div>

                    ${selectedWorkout.exercises.map((exercise, index) => {
            const isCompleted = completedExercises.includes(index);
            return `
                            <div class="exercise-item ${isCompleted ? 'completed' : ''}" onclick="toggleExercise(${index})" style="display: flex; align-items: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md); margin-bottom: var(--spacing-sm); cursor: pointer; transition: all 0.2s;">
                                <div class="exercise-checkbox" style="width: 24px; height: 24px; border-radius: 50%; border: 2px solid ${isCompleted ? 'var(--accent-green)' : 'var(--glass-border)'}; background: ${isCompleted ? 'var(--accent-green)' : 'transparent'}; display: flex; align-items: center; justify-content: center; margin-right: var(--spacing-md); flex-shrink: 0;">
                                    ${isCompleted ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                </div>
                                <span style="color: ${isCompleted ? 'var(--text-muted)' : 'var(--text-primary)'}; text-decoration: ${isCompleted ? 'line-through' : 'none'};">${exercise}</span>
                            </div>
                        `;
        }).join('')}

                    ${completedCount === totalExercises ? `
                    <div style="margin-top: var(--spacing-lg); padding: var(--spacing-lg); background: linear-gradient(135deg, var(--accent-green) 0%, #00b894 100%); border-radius: var(--radius-lg); text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: var(--spacing-sm);">🎉</div>
                        <h3 style="color: white; font-size: 1.3rem; margin-bottom: var(--spacing-xs);">¡Entrenamiento Completado!</h3>
                        <p style="color: rgba(255,255,255,0.9); margin-bottom: var(--spacing-md);">Excelente trabajo hoy</p>
                        <button class="btn" style="background: white; color: var(--accent-green); border: none;" onclick="resetWorkout()">
                            Reiniciar Rutina
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>

            <!-- Streak Section -->
            <div class="card" style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); border: none; margin-top: var(--spacing-md);">
                <div style="padding: var(--spacing-lg);">
                    <div style="text-align: center; margin-bottom: var(--spacing-lg);">
                        <div style="font-size: 4rem; margin-bottom: var(--spacing-sm); animation: pulse 2s ease-in-out infinite;">
                            🔥
                        </div>
                        <h3 style="color: white; font-weight: 700; font-size: 2rem; margin-bottom: var(--spacing-xs);">15 Días</h3>
                        <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem;">¡Racha de Entrenamiento!</p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-md); margin-bottom: var(--spacing-lg);">
                        <div style="text-align: center; background: rgba(255,255,255,0.15); padding: var(--spacing-md); border-radius: var(--radius-md); backdrop-filter: blur(10px);">
                            <div style="font-size: 1.8rem; font-weight: 700; color: white;">15</div>
                            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Días Actual</div>
                        </div>
                        <div style="text-align: center; background: rgba(255,255,255,0.15); padding: var(--spacing-md); border-radius: var(--radius-md); backdrop-filter: blur(10px);">
                            <div style="font-size: 1.8rem; font-weight: 700; color: white;">23</div>
                            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Mejor Racha</div>
                        </div>
                        <div style="text-align: center; background: rgba(255,255,255,0.15); padding: var(--spacing-md); border-radius: var(--radius-md); backdrop-filter: blur(10px);">
                            <div style="font-size: 1.8rem; font-weight: 700; color: white;">45</div>
                            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Total Días</div>
                        </div>
                    </div>

                    <!-- Calendar Visualization -->
                    <div style="background: rgba(255,255,255,0.1); padding: var(--spacing-md); border-radius: var(--radius-md); backdrop-filter: blur(10px);">
                        <p style="color: rgba(255,255,255,0.9); font-size: 0.85rem; font-weight: 600; margin-bottom: var(--spacing-sm); text-align: center;">Últimos 7 días</p>
                        <div style="display: flex; justify-content: center; gap: 0.4rem; padding: 0 0.5rem;">
                            ${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, idx) => {
            const isCompleted = idx < 6;
            return `
                                    <div style="text-align: center; flex: 0 0 auto;">
                                        <div style="
                                            width: 28px;
                                            height: 28px;
                                            margin: 0 auto 0.3rem;
                                            border-radius: 50%;
                                            background: ${isCompleted ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            font-size: 0.85rem;
                                            border: 2px solid ${isCompleted ? 'white' : 'rgba(255,255,255,0.3)'};
                                        ">
                                            ${isCompleted ? '✓' : ''}
                                        </div>
                                        <div style="font-size: 0.65rem; color: rgba(255,255,255,0.8); font-weight: 600;">${day}</div>
                                    </div>
                                `;
        }).join('')}
                        </div>
                    </div>

                    <div style="margin-top: var(--spacing-md); text-align: center; padding: var(--spacing-sm); background: rgba(255,255,255,0.1); border-radius: var(--radius-md);">
                        <p style="color: rgba(255,255,255,0.95); font-size: 0.85rem; font-weight: 500;">
                            💪 ¡Sigue así! Solo 8 días más para tu nuevo récord
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    nutrition: () => {
        const completedMeals = window.completedMeals || [];
        const completedCount = completedMeals.length;
        const totalMeals = nutritionPlan.meals.length;
        const consumedCalories = nutritionPlan.meals
            .filter((_, index) => completedMeals.includes(index))
            .reduce((sum, meal) => sum + meal.calories, 0);
        const progressPercent = (consumedCalories / nutritionPlan.dailyCalories) * 100;

        return `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Plan Nutricional</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Alimentación balanceada para tus objetivos</p>

            <div class="card mb-4">
                <div class="card-header">
                    <h3 class="card-title">Progreso Diario</h3>
                </div>
                <div class="card-body">
                    <div class="flex-between mb-2">
                        <span style="color: var(--text-secondary);">Calorías</span>
                        <span style="font-weight: 600;">${consumedCalories} / ${nutritionPlan.dailyCalories} kcal</span>
                    </div>
                    <div style="height: 8px; background: var(--glass-bg); border-radius: 10px; overflow: hidden; margin-bottom: var(--spacing-lg);">
                        <div style="height: 100%; background: var(--accent-purple); width: ${Math.min(progressPercent, 100)}%; transition: width 0.3s ease;"></div>
                    </div>

                    <div class="stats-grid">
                        <div style="text-align: center; padding: var(--spacing-sm); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent-green);">${nutritionPlan.macros.protein}g</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Proteína</div>
                        </div>
                        <div style="text-align: center; padding: var(--spacing-sm); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent-purple);">${nutritionPlan.macros.carbs}g</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Carbohidratos</div>
                        </div>
                        <div style="text-align: center; padding: var(--spacing-sm); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.3rem; font-weight: 700; color: var(--warning-color);">${nutritionPlan.macros.fats}g</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Grasas</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Comidas del Día</h3>
                    <span class="badge badge-primary">${completedCount}/${totalMeals}</span>
                </div>
                <div class="card-body">
                    ${nutritionPlan.meals.map((meal, index) => {
            const isCompleted = completedMeals.includes(index);
            return `
                            <div class="exercise-item ${isCompleted ? 'completed' : ''}" onclick="toggleMeal(${index})" style="display: flex; align-items: flex-start; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md); margin-bottom: var(--spacing-sm); cursor: pointer; transition: all 0.2s;">
                                <div class="exercise-checkbox" style="width: 24px; height: 24px; border-radius: 50%; border: 2px solid ${isCompleted ? 'var(--accent-purple)' : 'var(--glass-border)'}; background: ${isCompleted ? 'var(--accent-purple)' : 'transparent'}; display: flex; align-items: center; justify-content: center; margin-right: var(--spacing-md); flex-shrink: 0; margin-top: 2px;">
                                    ${isCompleted ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                                </div>
                                <div style="flex: 1;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xs);">
                                        <span style="font-weight: 600; color: ${isCompleted ? 'var(--text-muted)' : 'var(--text-primary)'};">${meal.name}</span>
                                        <span style="font-size: 0.85rem; color: var(--text-muted);">${meal.time}</span>
                                    </div>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: var(--spacing-xs);">
                                        ${meal.items.join(' • ')}
                                    </div>
                                    <div style="font-size: 0.85rem; color: var(--accent-purple); font-weight: 600;">${meal.calories} kcal</div>
                                </div>
                            </div>
                        `;
        }).join('')}

                    ${completedCount === totalMeals ? `
                    <div style="margin-top: var(--spacing-lg); padding: var(--spacing-lg); background: linear-gradient(135deg, var(--accent-purple) 0%, #a29bfe 100%); border-radius: var(--radius-lg); text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: var(--spacing-sm);">✨</div>
                        <h3 style="color: white; font-size: 1.3rem; margin-bottom: var(--spacing-xs);">¡Plan Completado!</h3>
                        <p style="color: rgba(255,255,255,0.9); margin-bottom: var(--spacing-md);">Nutrición perfecta hoy</p>
                        <button class="btn" style="background: white; color: var(--accent-purple); border: none;" onclick="resetMeals()">
                            Reiniciar Plan
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
        `;
    },

    progress: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Tu Progreso</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Seguimiento de tu evolución</p>

            <div class="card mb-4">
                <div class="card-header">
                    <h3 class="card-title">Mediciones</h3>
                    <button class="btn btn-primary btn-small" onclick="addMeasurement()">Nueva Medición</button>
                </div>
                <div class="card-body">
                    ${progressData.slice().reverse().map(data => `
                        <div style="padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md); margin-bottom: var(--spacing-sm);">
                            <div style="font-weight: 600; margin-bottom: var(--spacing-sm); color: var(--text-primary);">${data.date}</div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-sm);">
                                <div>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Peso:</span>
                                    <span style="font-weight: 600; margin-left: var(--spacing-xs);">${data.weight}kg</span>
                                </div>
                                <div>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Pecho:</span>
                                    <span style="font-weight: 600; margin-left: var(--spacing-xs);">${data.chest}cm</span>
                                </div>
                                <div>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Cintura:</span>
                                    <span style="font-weight: 600; margin-left: var(--spacing-xs);">${data.waist}cm</span>
                                </div>
                                <div>
                                    <span style="color: var(--text-muted); font-size: 0.85rem;">Brazos:</span>
                                    <span style="font-weight: 600; margin-left: var(--spacing-xs);">${data.arms}cm</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Resumen de Cambios</h3>
                </div>
                <div class="card-body">
                    <div class="stats-grid">
                        <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-green);">-3kg</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: var(--spacing-xs);">Peso Perdido</div>
                        </div>
                        <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-purple);">+2cm</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: var(--spacing-xs);">Pecho</div>
                        </div>
                        <div style="text-align: center; padding: var(--spacing-md); background: var(--glass-bg); border-radius: var(--radius-md);">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-green);">-3cm</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: var(--spacing-xs);">Cintura</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// ==================== ADMIN PAGES ====================
const adminPages = {
    dashboard: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Dashboard</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Vista general del gimnasio</p>

            <div class="stats-grid mb-4">
                <div class="stat-card">
                    <div class="stat-icon" style="background: var(--primary-gradient);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="stat-value">${adminUsers.length}</div>
                    <div class="stat-label">Total Usuarios</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: var(--success-gradient);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <div class="stat-value">${adminUsers.filter(u => u.status === 'active').length}</div>
                    <div class="stat-label">Activos</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: var(--warning-gradient);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <div class="stat-value">${adminUsers.filter(u => u.status === 'pending').length}</div>
                    <div class="stat-label">Pendientes</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Actividad Reciente</h3>
                </div>
                <div class="card-body">
                    <div class="list-item">
                        <div class="list-item-icon" style="background: var(--success-gradient);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div class="list-item-content">
                            <div class="list-item-title">Nuevo usuario registrado</div>
                            <div class="list-item-subtitle">María García - Hace 2 horas</div>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="list-item-icon" style="background: var(--primary-gradient);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <div class="list-item-content">
                            <div class="list-item-title">Pago recibido</div>
                            <div class="list-item-subtitle">Juan Pérez - $50 - Hace 5 horas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    users: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Gestión de Usuarios</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Administra los miembros del gimnasio</p>

            <button class="btn btn-primary mb-4" onclick="addNewUser()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: var(--spacing-xs);">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Nuevo Usuario
            </button>

            ${adminUsers.map(user => `
                <div class="card mb-3">
                    <div class="card-header">
                        <div>
                            <h4 class="card-title">${user.name}</h4>
                            <p class="card-subtitle">${user.age} años • ${user.weight}kg • ${user.height}cm</p>
                        </div>
                        <span class="badge ${user.status === 'active' ? 'badge-success' : 'badge-warning'}">
                            ${user.status === 'active' ? 'Activo' : 'Pendiente'}
                        </span>
                    </div>
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span style="color: var(--text-secondary);">Plan</span>
                            <span style="font-weight: 600;">${user.plan === 'beginner' ? 'Principiante' : 'Intermedio'}</span>
                        </div>
                        <div style="display: flex; gap: var(--spacing-sm); margin-top: var(--spacing-md);">
                            <button class="btn btn-secondary btn-small" onclick="viewUserDetail(${user.id})" style="flex: 1;">Ver Detalle</button>
                            <button class="btn btn-secondary btn-small" onclick="editUserAdmin(${user.id})" style="flex: 1;">Editar</button>
                            <button class="btn btn-secondary btn-small" onclick="deleteUser(${user.id})" style="flex: 1;">Eliminar</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `,

    routines: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Gestión de Rutinas</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Crea y asigna rutinas personalizadas</p>

            <div class="card mb-4">
                <div class="card-header">
                    <h3 class="card-title">Plantillas Disponibles</h3>
                    <button class="btn btn-primary btn-small" onclick="createRoutine()">Nueva Rutina</button>
                </div>
                <div class="card-body">
                    <div class="list-item" onclick="viewRoutine('beginner')">
                        <div class="list-item-icon" style="background: var(--success-gradient);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="list-item-content">
                            <div class="list-item-title">Plan Principiante</div>
                            <div class="list-item-subtitle">7 días | Nivel básico</div>
                        </div>
                        <span class="badge badge-success">Activa</span>
                    </div>
                    <div class="list-item" onclick="viewRoutine('intermediate')">
                        <div class="list-item-icon" style="background: var(--primary-gradient);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="list-item-content">
                            <div class="list-item-title">Plan Intermedio</div>
                            <div class="list-item-subtitle">7 días | Nivel medio</div>
                        </div>
                        <span class="badge badge-primary">Activa</span>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Asignar Rutina a Usuario</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label class="form-label">Seleccionar Usuario</label>
                        <select class="form-input" id="userSelect">
                            <option value="">Selecciona un usuario...</option>
                            ${adminUsers.map(user => `
                                <option value="${user.id}">${user.name}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Seleccionar Rutina</label>
                        <select class="form-input" id="routineSelect">
                            <option value="">Selecciona una rutina...</option>
                            <option value="beginner">Plan Principiante</option>
                            <option value="intermediate">Plan Intermedio</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" style="width: 100%;" onclick="assignRoutineToUser()">Asignar Rutina</button>
                </div>
            </div>
        </div>
    `,

    payments: () => `
        <div class="fade-in">
            <h2 class="mb-3" style="font-size: 1.8rem; font-weight: 700;">Gestión de Pagos</h2>
            <p class="mb-4" style="color: var(--text-secondary);">Controla las suscripciones y pagos</p>

            <div class="stats-grid mb-4">
                <div class="stat-card">
                    <div class="stat-value">$${adminUsers.filter(u => u.status === 'active').length * 50}</div>
                    <div class="stat-label">Ingresos del Mes</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${adminUsers.filter(u => u.status === 'pending').length}</div>
                    <div class="stat-label">Pagos Pendientes</div>
                </div>
            </div>

            ${adminUsers.map(user => `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h4 class="card-title">${user.name}</h4>
                            <p class="card-subtitle">ID: ${user.id}</p>
                        </div>
                        <span class="badge ${user.status === 'active' ? 'badge-success' : 'badge-warning'}">
                            ${user.status === 'active' ? 'Al día' : 'Pendiente'}
                        </span>
                    </div>
                    <div class="card-body">
                        <div class="flex-between mb-2">
                            <span style="color: var(--text-secondary);">Último pago</span>
                            <span style="font-weight: 600;">${user.lastPayment}</span>
                        </div>
                        <div class="flex-between mb-3">
                            <span style="color: var(--text-secondary);">Próximo pago</span>
                            <span style="font-weight: 600;">${user.nextPayment}</span>
                        </div>
                        <button class="btn ${user.status === 'active' ? 'btn-secondary' : 'btn-primary'} btn-small" style="width: 100%;" onclick="registerPayment(${user.id})">
                            ${user.status === 'active' ? 'Ver Historial' : 'Registrar Pago'}
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `
};

// ==================== NAVIGATION ====================
function navigateToUser(page, keepScroll = false) {
    const mainContent = document.getElementById('mainContent');
    const currentScroll = keepScroll ? mainContent.scrollTop : 0;

    document.querySelectorAll('#userApp .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    mainContent.innerHTML = userPages[page]();

    if (keepScroll) {
        setTimeout(() => {
            mainContent.scrollTop = currentScroll;
        }, 0);
    } else {
        mainContent.scrollTop = 0;
    }
}

function navigateToAdmin(page) {
    document.querySelectorAll('#adminApp .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    const adminContent = document.getElementById('adminContent');
    adminContent.innerHTML = adminPages[page]();
    adminContent.scrollTop = 0;
}

// ==================== EXERCISE & MEAL TRACKING ====================
function toggleExercise(index) {
    if (!window.completedExercises) {
        window.completedExercises = [];
    }

    const idx = window.completedExercises.indexOf(index);
    if (idx > -1) {
        window.completedExercises.splice(idx, 1);
    } else {
        window.completedExercises.push(index);
    }

    navigateToUser('training', true);
}

function selectWorkoutDay(dayIndex) {
    window.selectedWorkoutDay = dayIndex;
    window.completedExercises = [];
    navigateToUser('training', true);
}

function resetWorkout() {
    window.completedExercises = [];
    navigateToUser('training', false);
}

function toggleMeal(index) {
    if (!window.completedMeals) {
        window.completedMeals = [];
    }

    const idx = window.completedMeals.indexOf(index);
    if (idx > -1) {
        window.completedMeals.splice(idx, 1);
    } else {
        window.completedMeals.push(index);
    }

    navigateToUser('nutrition', true);
}

function resetMeals() {
    window.completedMeals = [];
    navigateToUser('nutrition', false);
}

// ==================== ADMIN FUNCTIONS ====================
function viewUserDetail(userId) {
    const user = adminUsers.find(u => u.id === userId);
    alert(`Detalle de Usuario - ${user.name}\\n\\n` +
        `Edad: ${user.age} años\\n` +
        `Peso: ${user.weight}kg\\n` +
        `Altura: ${user.height}cm\\n` +
        `Plan: ${user.plan === 'beginner' ? 'Principiante' : 'Intermedio'}\\n` +
        `Estado: ${user.status === 'active' ? 'Activo' : 'Pendiente'}\\n` +
        `Último pago: ${user.lastPayment}\\n` +
        `Próximo pago: ${user.nextPayment}`);
}

function editUserAdmin(userId) {
    const user = adminUsers.find(u => u.id === userId);
    alert(`Editar Usuario - ${user.name}\\n\\n` +
        'Esta funcionalidad permitiría:\\n' +
        '- Modificar datos personales\\n' +
        '- Cambiar plan de entrenamiento\\n' +
        '- Actualizar plan nutricional\\n' +
        '- Modificar objetivos');
}

function deleteUser(userId) {
    const user = adminUsers.find(u => u.id === userId);
    if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
        const index = adminUsers.findIndex(u => u.id === userId);
        adminUsers.splice(index, 1);
        navigateToAdmin('users');
        alert(`Usuario ${user.name} eliminado exitosamente.`);
    }
}

function addMeasurement() {
    const today = new Date().toISOString().split('T')[0];
    const lastMeasurement = progressData[progressData.length - 1];

    const content = `
        <form id="measurementForm" style="display: grid; gap: var(--spacing-md);">
            <div class="form-group">
                <label class="form-label">Fecha</label>
                <input type="date" id="measurementDate" class="form-input" value="${today}" required>
            </div>
            
            <div class="form-group">
                <label class="form-label">Peso (kg)</label>
                <input type="number" id="measurementWeight" class="form-input" 
                       placeholder="Ej: ${lastMeasurement.weight}" step="0.1" min="30" max="200" required>
            </div>
            
            <div class="form-group">
                <label class="form-label">Pecho (cm)</label>
                <input type="number" id="measurementChest" class="form-input" 
                       placeholder="Ej: ${lastMeasurement.chest}" step="0.5" min="50" max="150" required>
            </div>
            
            <div class="form-group">
                <label class="form-label">Cintura (cm)</label>
                <input type="number" id="measurementWaist" class="form-input" 
                       placeholder="Ej: ${lastMeasurement.waist}" step="0.5" min="50" max="150" required>
            </div>
            
            <div class="form-group">
                <label class="form-label">Brazos (cm)</label>
                <input type="number" id="measurementArms" class="form-input" 
                       placeholder="Ej: ${lastMeasurement.arms}" step="0.5" min="20" max="60" required>
            </div>
            
            <div style="background: rgba(102, 126, 234, 0.1); padding: var(--spacing-sm); border-radius: var(--radius-sm); border-left: 3px solid var(--accent-purple);">
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin: 0;">
                    💡 <strong>Tip:</strong> Registra tus mediciones cada 15 días para un mejor seguimiento de tu progreso.
                </p>
            </div>
        </form>
    `;

    showModal('Registrar Nueva Medición', content, [
        {
            text: 'Cancelar',
            class: 'btn-secondary',
            onClick: () => { }
        },
        {
            text: 'Guardar Medición',
            class: 'btn-primary',
            onClick: () => {
                const form = document.getElementById('measurementForm');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return false;
                }

                const newMeasurement = {
                    date: document.getElementById('measurementDate').value,
                    weight: parseFloat(document.getElementById('measurementWeight').value),
                    chest: parseFloat(document.getElementById('measurementChest').value),
                    waist: parseFloat(document.getElementById('measurementWaist').value),
                    arms: parseFloat(document.getElementById('measurementArms').value)
                };

                progressData.push(newMeasurement);
                userData.weight = newMeasurement.weight;
                userData.lastUpdate = newMeasurement.date;

                showSuccess('¡Medición Guardada!',
                    `Tu progreso ha sido registrado exitosamente. ¡Sigue así! 💪`);

                setTimeout(() => {
                    navigateToUser('progress', false);
                }, 1500);
            },
            closeOnClick: false
        }
    ]);
}

function viewWeekWorkout(dayIndex) {
    const workout = workoutPlans.intermediate[dayIndex];
    alert(`${workout.day} - ${workout.focus}\\n\\n` +
        'Ejercicios:\\n' +
        workout.exercises.map((ex, i) => `${i + 1}. ${ex}`).join('\\n'));
}

function addNewUser() {
    alert('Agregar Nuevo Usuario\\n\\n' +
        'Esta funcionalidad permitiría:\\n' +
        '- Registrar datos personales\\n' +
        '- Asignar plan inicial\\n' +
        '- Configurar plan de alimentación\\n' +
        '- Establecer objetivos');
}

function viewRoutine(type) {
    const plan = workoutPlans[type];
    alert(`Plan ${type === 'beginner' ? 'Principiante' : 'Intermedio'}\\n\\n` +
        plan.map(day => `${day.day}: ${day.focus}\\n${day.exercises.join(', ')}`).join('\\n\\n'));
}

function createRoutine() {
    alert('Crear Nueva Rutina\\n\\n' +
        'Esta funcionalidad permitiría:\\n' +
        '- Definir días de entrenamiento\\n' +
        '- Agregar ejercicios personalizados\\n' +
        '- Establecer series y repeticiones\\n' +
        '- Guardar como plantilla');
}

function assignRoutineToUser() {
    const userId = document.getElementById('userSelect').value;
    const routineType = document.getElementById('routineSelect').value;

    if (!userId || !routineType) {
        alert('Por favor selecciona un usuario y una rutina');
        return;
    }

    const user = adminUsers.find(u => u.id === parseInt(userId));
    user.plan = routineType;

    alert(`Rutina ${routineType === 'beginner' ? 'Principiante' : 'Intermedio'} asignada a ${user.name} exitosamente.`);
}

function registerPayment(userId) {
    const user = adminUsers.find(u => u.id === userId);

    if (user.status === 'active') {
        alert(`Historial de Pagos - ${user.name}\\n\\n` +
            `Último pago: ${user.lastPayment}\\n` +
            `Próximo pago: ${user.nextPayment}\\n` +
            `Estado: Al día`);
    } else {
        if (confirm(`Registrar pago para ${user.name}?`)) {
            user.status = 'active';
            user.lastPayment = new Date().toISOString().split('T')[0];
            const nextDate = new Date();
            nextDate.setMonth(nextDate.getMonth() + 1);
            user.nextPayment = nextDate.toISOString().split('T')[0];

            navigateToAdmin('payments');
            alert('Pago registrado exitosamente');
        }
    }
}

// ==================== INITIALIZATION ====================
function initUserApp() {
    document.getElementById('userInitials').textContent = userData.name.charAt(0).toUpperCase();

    document.querySelectorAll('#userApp .nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navigateToUser(item.dataset.page);
        });
    });

    navigateToUser('home');
}

function initAdminApp() {
    document.querySelectorAll('#adminApp .nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navigateToAdmin(item.dataset.page);
        });
    });

    navigateToAdmin('dashboard');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });

    document.addEventListener('click', (e) => {
        const element = e.target.closest('.btn, .nav-item, .list-item, .card');
        if (element) {
            element.style.opacity = '0.8';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 150);
        }
    });
});
