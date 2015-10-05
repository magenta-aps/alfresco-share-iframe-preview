package dk.magenta.surf.extensibility;

import org.springframework.extensions.surf.RequestContext;
import org.springframework.extensions.surf.extensibility.ExtensionModuleEvaluator;

import java.util.Map;

/**
 * Created by syastrov on 10/5/15.
 */
public class SlingshotPageIdModuleEvaluator implements ExtensionModuleEvaluator {
    private static final String PAGE_ID = "pageId";

    @Override
    public boolean applyModule(RequestContext requestContext, Map<String, String> map) {
        String pageId = requestContext.getPageId();
        return pageId != null && pageId.equals(map.get(PAGE_ID));
    }

    @Override
    public String[] getRequiredProperties() {
        return new String[] {PAGE_ID};
    }
}
