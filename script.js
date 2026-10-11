// ✍️ 主观题渲染器
function renderSubjectiveQuestions() {
    if (typeof subjectiveDataList === 'undefined' || subjectiveDataList.length === 0) return;

    const section = document.getElementById('subjectiveSection');
    const container = document.getElementById('subjectiveContainer');
    if (!section || !container) return;

    container.innerHTML = "";
    section.style.display = "block";

    subjectiveDataList.forEach((item, index) => {
        const card = document.createElement('div');
        card.style.background = "#f9f9f9";
        card.style.borderLeft = "4px solid #3498db";
        card.style.padding = "15px";
        card.style.marginBottom = "20px";
        card.style.borderRadius = "4px";

        // 题目
        const qText = document.createElement('div');
        qText.style.fontWeight = "bold";
        qText.style.color = "#2c3e50";
        qText.style.marginBottom = "10px";
        qText.style.lineHeight = "1.6";
        qText.innerText = `${index + 1}. ${item.question}`;
        card.appendChild(qText);

        // 查看答案按钮
        const btn = document.createElement('button');
        btn.innerText = "查看参考答案 👁️";
        btn.style.padding = "8px 18px";
        btn.style.background = "#3498db";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "20px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "14px";
        card.appendChild(btn);

        // 答案区
        const answerDiv = document.createElement('div');
        answerDiv.style.display = "none";
        answerDiv.style.marginTop = "12px";
        answerDiv.style.background = "#fff";
        answerDiv.style.padding = "12px";
        answerDiv.style.borderRadius = "4px";
        answerDiv.style.lineHeight = "1.8";

        // 教师解析节点（用于切换赏析模式时显示/隐藏）
        answerDiv.innerHTML = `
            <div style="color: #27ae60; font-weight: bold; margin-bottom: 6px;">✅ 参考答案：</div>
            <div style="color: #333; margin-bottom: 12px;">${item.answer}</div>
            <div id="subj-analysis-${item.id}" style="display: ${isTeacherMode ? 'block' : 'none'}; color: #8e44ad;">
                <div style="font-weight: bold; margin-bottom: 6px;">💡 教师解析：</div>
                <div style="color: #555;">${item.teacherAnalysis}</div>
            </div>
        `;
        card.appendChild(answerDiv);

        // 按钮切换逻辑
        btn.onclick = () => {
            const isHidden = answerDiv.style.display === "none";
            answerDiv.style.display = isHidden ? "block" : "none";
            btn.innerText = isHidden ? "隐藏参考答案 🙈" : "查看参考答案 👁️";
        };

        container.appendChild(card);
    });
}
