---
source_path: "documentation/AVFoundation/selecting-subtitles-and-alternative-audio-tracks.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/selecting-subtitles-and-alternative-audio-tracks"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:selecting-subtitles-and-alternative-audio-tracks:0000:0001">자막 및 대체 오디오 트랙 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:selecting-subtitles-and-alternative-audio-tracks:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:selecting-subtitles-and-alternative-audio-tracks:0002:0001">원어민 언어로 자막과 대체 오디오 트랙을 추가해 앱의 도달 범위를 넓일 수 있습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">개발자로서 앱을 가능한 한 넓은 사용자에게 접근 가능하게 만들고자 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">앱의 도달 범위를 넓히는 한 방법은 사용자에게 모국어로 제공하고, 청각 장애나 기타 접근성 요구가 있는 사용자를 지원하는 것입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">AVKit 및 AVFoundation은 자막 및 폐쇄 캡션 표시와 대체 오디오 및 비디오 트랙 선택을 위한 기본 제공 지원을 제공하여 이러한 문제를 간단하게 처리할 수 있게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0004">직접 사용자 지정 플레이어를 구축하거나 자체 미디어 선택 인터페이스를 표시하려는 경우 AVFoundation의 <a href="avmediaselectiongroup.md">@@TOKEN_0@@</a> 및 <a href="avmediaselectionoption.md">@@TOKEN_1@@</a> 클래스가 제공하는 기능을 사용합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:retrieve-the-available-media-options:0005:0001">사용 가능한 미디어 옵션 검색</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0006:0001"><code>AVMediaSelectionOption</code>은(는) 소스 미디어에 포함된 대체 오디오, 비디오 또는 텍스트 트랙을 모델링합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0006:0002">미디어 옵션은 대체 카메라 각도 선택, 사용자 모국어로 더빙한 오디오 제공, 자막 및 폐쇄 캡션 표시에 사용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0006:0003">에셋의 사용 가능한 미디어 표현은 에셋의 <a href="avasset/availablemediacharacteristicswithmediaselectionoptions.md">@@TOKEN_0@@</a> 속성을 비동기식으로 로드하고 호출하면 확인할 수 있으며, 이 속성은 사용 가능한 미디어 특성을 나타내는 문자열 배열을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0006:0004">반환되는 가능한 값은 <a href="avmediacharacteristic/audible.md">@@TOKEN_0@@</a>(대체 오디오 트랙), <a href="avmediacharacteristic/visual.md">@@TOKEN_1@@</a>(대체 비디오 트랙), <a href="avmediacharacteristic/legible.md">@@TOKEN_2@@</a>(자막 및 폐쇄 캡션)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0007:0001">사용 가능한 옵션 배열을 검색한 후 에셋의 <a href="avasset/mediaselectiongroup(formediacharacteristic:">@@TOKEN_0@@</a>.md) 메서드를 호출해 원하는 특성을 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0007:0002">이 메서드는 해당 <code>AVMediaSelectionGroup</code> 객체를 반환하며, 지정한 특성에 대한 그룹이 없으면 <code>nil</code>을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0008:0001"><code>AVMediaSelectionGroup</code>은 서로 배타적인 <code>AVMediaSelectionOption</code> 객체 집합의 컨테이너 역할을 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0008:0002">다음 예제는 에셋의 미디어 선택 그룹을 검색하고 사용 가능한 옵션을 표시하는 방법을 보여줍니다.</span>

```swift
for characteristic in asset.availableMediaCharacteristicsWithMediaSelectionOptions {
    print("\(characteristic)")

    // Retrieve the AVMediaSelectionGroup for the specified characteristic.
    if let group = asset.mediaSelectionGroup(forMediaCharacteristic: characteristic) {
        // Print its options.
        for option in group.options {
            print("  Option: \(option.displayName)")
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:retrieve-the-available-media-options:0010:0001">오디오와 자막 미디어 옵션이 포함된 에셋의 출력은 다음과 유사합니다.</span>

```swift
[AVMediaCharacteristicAudible]
  Option: English
  Option: Spanish

[AVMediaCharacteristicLegible]
  Option: English
  Option: German
  Option: Spanish
  Option: French
```

##### <span class="ko-segment" data-segment-id="seg:heading:select-the-desired-media-option:0012:0001">원하는 미디어 옵션 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0013:0001">특정 미디어 특성에 대한 <code>AVMediaSelectionGroup</code> 객체를 검색하고 원하는 <code>AVMediaSelectionOption</code> 객체를 확인한 후 다음 단계는 해당 옵션을 선택하는 것입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0013:0002">활성 <a href="avplayeritem.md">@@TOKEN_0@@</a>에서 <a href="avplayeritem/select(_:in:">@@TOKEN_1@@</a>.md) 메서드를 호출해 미디어 옵션을 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0013:0003">예를 들어 에셋의 스페인어 자막 옵션을 표시하려면 다음과 같이 선택할 수 있습니다.</span>

```swift
if let group = asset.mediaSelectionGroup(forMediaCharacteristic: AVMediaCharacteristicLegible) {
    let locale = Locale(identifier: "es-ES")
    let options =
        AVMediaSelectionGroup.mediaSelectionOptions(from: group.options, with: locale)
    if let option = options.first {
        // Select Spanish-language subtitle option
        playerItem.select(option, in: group)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0015:0001">미디어 옵션을 선택하면 즉시 표시할 수 있게 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0015:0002">자막 또는 폐쇄 캡션 옵션을 선택하면 <a href="https://developer.apple.com/documentation/AVKit/AVPlayerViewController">@@TOKEN_0@@</a>, <a href="https://developer.apple.com/documentation/AVKit/AVPlayerView">@@TOKEN_1@@</a>, <a href="avplayerlayer.md">@@TOKEN_2@@</a>가 제공하는 비디오 화면에 관련 텍스트가 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0015:0003">Selecting an alternative audio or video option replaces the currently presented media with the new selection’s media.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0016:0001"><a href="avplayer.md">@@TOKEN_0@@</a> automatically selects media based on the user’s system preferences as its default behavior.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-the-desired-media-option:0016:0002">To take control over when it makes media selections, disable the default behavior by setting the player’s <a href="avplayer/appliesmediaselectioncriteriaautomatically.md">@@TOKEN_0@@</a> value to <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmediaselection.md">class AVMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">An object that represents a complete rendition of media selection options on an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmediaselectiongroup.md">class AVMediaSelectionGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An object that represents a collection of mutually exclusive options for the presentation of media within an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmediaselectionoption.md">class AVMediaSelectionOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">An object that represents a specific option for the presentation of media within a group of options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmutablemediaselection.md">class AVMutableMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A mutable object that represents a complete rendition of media selection options on an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avplayermediaselectioncriteria.md">class AVPlayerMediaSelectionCriteria</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">An object that specifies the preferred languages and media characteristics for a player.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avcustommediaselectionscheme.md">class AVCustomMediaSelectionScheme</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmediapresentationselector.md">class AVMediaPresentationSelector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSelector represents a collection of mutually exclusive settings.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmediapresentationsetting.md">class AVMediaPresentationSetting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSetting represents a selectable setting for controlling the presentation of the media.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/selecting-subtitles-and-alternative-audio-tracks">View on Apple Developer</a>*</span>
