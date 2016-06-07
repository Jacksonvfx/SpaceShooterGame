#pragma strict

import UnityEngine.EventSystems;
import UnityEngine.UI.ScrollRect;
    class LevelSelectToggle extends MonoBehaviour implements ISelectHandler, ISubmitHandler {
        var myScrollRect : ScrollRect;
        var scrollToValue : float;
        var nextSelection : GameObject;
        var eventSystem : EventSystem;
        function OnSelect(eventData : BaseEventData)
    {
            myScrollRect.horizontalNormalizedPosition = scrollToValue;
    }
        function OnSubmit(eventData : BaseEventData) {
            eventSystem.SetSelectedGameObject(nextSelection);
    }
}