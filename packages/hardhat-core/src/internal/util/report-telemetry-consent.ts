import { Analytics } from "../cli/analytics";

async function main() {
  const [telemetryConsent] = process.argv.slice(2);

  if (telemetryConsent !== "yes" && telemetryConsent !== "no") {
    console.error(`Invalid telemetry consent value received: ${telemetryConsent}`);
    process.exit(1);
  }

  // we pass undefined as the telemetryConsent value because
  // this hit is done before the consent is saved
  const analytics = await Analytics.getInstance(undefined);

  const [_, consentHitPromise] = await analytics.sendTelemetryConsentHit(
    telemetryConsent as "yes" | "no"
  );
  await consentHitPromise;
}

main().catch(() => {});
