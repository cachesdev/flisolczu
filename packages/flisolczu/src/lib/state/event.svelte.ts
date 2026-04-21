import { env } from '$env/dynamic/public';

const EVENT_START_MS = Date.parse('2026-04-25T14:00:00-03:00');
const SECOND_MS = 1000;

class EventState {
	now = $state(Date.now());
	#interval: ReturnType<typeof setInterval> | null = null;

	get timeUntilStart() {
		return Math.max(EVENT_START_MS - this.now, 0);
	}

	get hasStarted() {
		return this.now >= EVENT_START_MS;
	}

	get registrationsDisabled() {
		return env.PUBLIC_CERT_REGISTRATION_DISABLED?.toLowerCase() === 'true';
	}

	get registrationsClosed() {
		return this.registrationsDisabled || this.hasStarted;
	}

	get countdown() {
		const ms = this.timeUntilStart;
		return {
			days: Math.floor(ms / 86400000),
			hours: Math.floor((ms % 86400000) / 3600000),
			minutes: Math.floor((ms % 3600000) / 60000),
			seconds: Math.floor((ms % 60000) / 1000)
		};
	}

	startTicking() {
		if (this.#interval) return;
		this.#interval = setInterval(() => {
			this.now = Date.now();
		}, SECOND_MS);
	}

	stopTicking() {
		if (this.#interval) {
			clearInterval(this.#interval);
			this.#interval = null;
		}
	}
}

export const eventState = new EventState();
