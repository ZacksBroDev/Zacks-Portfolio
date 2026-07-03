export const CASE_STUDY_META = {
  1: {
    label: "Client storefront",
    archiveNote: "Commerce UX, brand presentation, and checkout clarity.",
    focus: [
      "Responsive storefront UX",
      "Clear discovery-to-checkout path",
      "Stronger visual brand presentation",
    ],
  },
  2: {
    label: "Lead case study",
    archiveNote:
      "Member training portal with schedule, resources, and role-aware UI.",
    focus: [
      "Responsive training dashboard",
      "Clear information architecture",
      "Role-aware platform experience",
    ],
  },
  3: {
    label: "Performance site",
    archiveNote:
      "Image-heavy promotional site tuned for performance and clarity.",
    focus: [
      "Performance-minded gallery experience",
      "Clear promotional storytelling",
      "Responsive content-heavy layout",
    ],
  },
  4: {
    label: "Personal product",
    archiveNote: "Data-dense finance dashboard with complex product flows.",
    focus: [
      "Complex product UI",
      "Dashboard and data-heavy flows",
      "Frontend systems thinking",
    ],
  },
  6: {
    label: "Interactive product",
    archiveNote:
      "Gift-style product experience with stateful interaction design.",
    focus: [
      "Interface state systems",
      "Content-rich product design",
      "Responsive interaction patterns",
    ],
  },
  7: {
    label: "Training tool",
    archiveNote: "Decision-training app focused on quick feedback loops.",
    focus: [
      "Gameplay feedback UI",
      "Persistent progress tracking",
      "Browser-based training workflow",
    ],
  },
  8: {
    label: "Simulation build",
    archiveNote:
      "Probability sandbox with configurable controls and chart output.",
    focus: [
      "Interactive controls and simulation flow",
      "Chart-based output",
      "Fast browser experimentation",
    ],
  },
};

export const PROJECT_MEDIA_PRESENTATION = {
  1: {
    collection: {
      background: "#151218",
      fit: "cover",
      position: "center center",
    },
    supporting: {
      background: "#151218",
      fit: "cover",
      position: "center center",
    },
  },
  2: {
    collection: {
      background: "#10161f",
      fit: "contain",
      padding: "1rem 1rem 0.45rem",
      position: "top center",
      radius: "20px",
    },
    featured: {
      background: "#10161f",
      fit: "contain",
      padding: "1rem 1rem 0.55rem",
      position: "top center",
      radius: "22px",
    },
    supporting: {
      background: "#10161f",
      fit: "contain",
      padding: "1rem 1rem 0.45rem",
      position: "top center",
      radius: "20px",
    },
  },
  4: {
    collection: {
      background: "#0e131c",
      fit: "contain",
      padding: "1.2rem 1.2rem 0.45rem",
      position: "top center",
      radius: "20px",
    },
    supporting: {
      background: "#0e131c",
      fit: "contain",
      padding: "1.2rem 1.2rem 0.45rem",
      position: "top center",
      radius: "20px",
    },
  },
};

export const getProjectMediaVars = (id, variant) => {
  const config = PROJECT_MEDIA_PRESENTATION[id]?.[variant] ?? {};

  return {
    "--project-media-background": config.background ?? "rgba(0, 0, 0, 0.18)",
    "--project-media-fit": config.fit ?? "cover",
    "--project-media-padding": config.padding ?? "0",
    "--project-media-position": config.position ?? "center center",
    "--project-media-radius": config.radius ?? "0px",
  };
};

export const getProjectKindLabel = (item) => {
  if (!item) {
    return "Project";
  }

  return item.category === "business"
    ? "Client work"
    : item.category === "personal"
      ? "Product build"
      : "Demo / Lab";
};

export const getProjectCaseLabel = (item) =>
  (item && CASE_STUDY_META[item.id]?.label) || getProjectKindLabel(item);

export const getProjectArchiveNote = (item) =>
  (item && CASE_STUDY_META[item.id]?.archiveNote) || item?.description || "";

export const getProjectFocusPoints = (item, limit = 3) => {
  if (!item) {
    return [];
  }

  const fallbackPoints = (item.features || []).slice(0, limit);
  const points = CASE_STUDY_META[item.id]?.focus || fallbackPoints;

  return points.slice(0, limit);
};
