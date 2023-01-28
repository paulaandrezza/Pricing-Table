const plans = [
    { planType: "Free", value: 0, nBenefits: 2 },
    { planType: "Básico", value: 29, nBenefits: 3 },
    { planType: "Profissional", value: 59, nBenefits: 4 },
];

const boxes = document.getElementById("boxes");

function converPlansToLi (plan) {
    return `
        <li class="box ${plan.planType === "Básico" ? "popular" : ""}">
            <div class="plan-type">
                <p>${plan.planType}</p>
                ${plan.planType === "Básico" ? "<p class='icon-popular'>Popular</p>" : ""}
            </div>
            <h3 class="plan-value">R$ ${plan.value}<span class="cents">00</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="plan-benefits">
                ${'<p>Lorem ipsum dolor sit.</p>'.repeat(plan.nBenefits)}
            </div>
            <button>Assinar</button>
        </li>
    `
}

function loadPlanItens () {
    const newHtml = plans.map(converPlansToLi).join('');
    boxes.innerHTML = newHtml;
}

loadPlanItens();