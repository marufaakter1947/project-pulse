// lib/healthScore.js

/**
 * Calculate Project Health Score (0–100)
 * Logic:
 * - Recent client satisfaction (1–5)
 * - Employee confidence levels (1–5)
 * - Project progress vs timeline (0–100)
 * - Number of open risks
 *
 * Weightage:
 * - Client Satisfaction: 30%
 * - Employee Confidence: 30%
 * - Progress: 30%
 * - Risks: 10% (more risks = lower score)
 */

export const calculateHealthScore = ({ clientRatings = [], employeeConfidence = [], progress = 0, openRisks = 0 }) => {
  // Average client rating (1–5)
  const clientScore = clientRatings.length
    ? (clientRatings.reduce((a, b) => a + b, 0) / clientRatings.length) * 20 // scale to 0-100
    : 100;

  // Average employee confidence (1–5)
  const employeeScore = employeeConfidence.length
    ? (employeeConfidence.reduce((a, b) => a + b, 0) / employeeConfidence.length) * 20
    : 100;

  // Progress score is already 0-100
  const progressScore = progress;

  // Risk penalty (each open risk deducts 5 points, min 0)
  const riskPenalty = openRisks * 5;

  // Weighted total
  let totalScore = (clientScore * 0.3) + (employeeScore * 0.3) + (progressScore * 0.3) - (riskPenalty * 0.1);
  if (totalScore > 100) totalScore = 100;
  if (totalScore < 0) totalScore = 0;

  return Math.round(totalScore);
};

/**
 * Convert numeric score to status
 */
export const healthStatus = (score) => {
  if (score >= 80) return "On Track";
  if (score >= 60) return "At Risk";
  return "Critical";
};
