# Third-Party Scripts

It's common to be asked to add third-party scripts to your theme.

To ensure that you don't need to push code to toggle an integration, use
a theme setting.

Given the file `snippets/gtm-script.liquid`:

```liquid
{% if settings.enable_gtm %}
<script>.....</script>
{% endif %}

```

In your `layout/theme.liquid` file:

```liquid
{% render 'gtm-script' %}
```
