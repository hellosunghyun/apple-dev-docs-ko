---
source_path: "documentation/AVFoundation/avcomposition/mediaselectiongroup-formediacharacteristic.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/mediaselectiongroup-formediacharacteristic"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaselectiongroupformediacharacteristic:0000:0001">mediaSelectionGroup(forMediaCharacteristic:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectiongroupformediacharacteristic:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectiongroupformediacharacteristic:0002:0001">지정한 미디어 특성이 포함된 하나 이상의 옵션을 포함하는 미디어 선택 그룹을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectiongroupformediacharacteristic:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectiongroupformediacharacteristic:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func mediaSelectionGroup(forMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> AVMediaSelectionGroup?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 미디어 특성을 가진 하나 이상의 옵션이 포함된 <a href="avmediaselectiongroup.md">@@TOKEN_0@@</a> 또는 찾을 수 없는 경우 <code>nil</code>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Use the filtering methods <a href="avmediaselectiongroup.md">@@TOKEN_0@@</a> defines to filter the group’s options according to playability, locale, and additional media characteristics.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="avasset/availablemediacharacteristicswithmediaselectionoptions.md">@@TOKEN_0@@</a> property를 비동기로 로드한 뒤에는 현재 스레드를 차단하지 않고 이 메서드를 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>mediaCharacteristic</code>: 사용 가능한 미디어 선택 옵션을 가져올 미디어 특성입니다. 현재 <a href="avmediacharacteristic/audible.md">@@TOKEN_1@@</a>, <a href="avmediacharacteristic/visual.md">@@TOKEN_2@@</a>, <a href="avmediacharacteristic/legible.md">@@TOKEN_3@@</a>만 현재 지원됩니다. - <a href="avmediacharacteristic/audible.md">@@TOKEN_4@@</a>을 전달하면 설명 오디오와 같이 다양한 언어 및 용도의 오디오 미디어에 대한 사용 가능한 옵션 그룹을 반환합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><a href="avmediacharacteristic/legible.md">@@TOKEN_0@@</a>를 전달하면 다양한 언어의 자막과 다양한 용도에 대한 자막 옵션 그룹이 반환됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><a href="avmediacharacteristic/visual.md">@@TOKEN_0@@</a>를 전달하면 비디오 미디어의 사용 가능한 옵션 그룹이 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[var allMediaSelections: [AVMediaSelection]](avcomposition/allmediaselections.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이 에셋에서 사용 가능한 media selections의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[var availableMediaCharacteristicsWithMediaSelectionOptions: [AVMediaCharacteristic]](avcomposition/availablemediacharacteristicswithmediaselectionoptions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">미디어 선택 옵션을 사용할 수 있는 미디어 특성의 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/mediaselectiongroup(formediacharacteristic:">View on Apple Developer</a>)*</span>
