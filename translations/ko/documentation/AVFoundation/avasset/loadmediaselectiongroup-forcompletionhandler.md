---
source_path: "documentation/AVFoundation/avasset/loadmediaselectiongroup-forcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasset/loadmediaselectiongroup-forcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadmediaselectiongroupforcompletionhandler:0000:0001">loadMediaSelectionGroup(for:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmediaselectiongroupforcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmediaselectiongroupforcompletionhandler:0002:0001">지정된 미디어 특성을 포함한 하나 이상의 옵션이 있는 미디어 선택 그룹을 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmediaselectiongroupforcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmediaselectiongroupforcompletionhandler:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func loadMediaSelectionGroup(for mediaCharacteristic: AVMediaCharacteristic) async throws -> AVMediaSelectionGroup?
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>mediaCharacteristic</code>: 사용 가능한 미디어 선택 옵션을 로드할 미디어 특성입니다. 지원되는 특성은 다음과 같습니다: - <a href="avmediacharacteristic/audible.md">@@TOKEN_1@@</a> to return the group of available options for audio media in various languages and for various purposes, such as descriptive audio</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><a href="avmediacharacteristic/legible.md">@@TOKEN_0@@</a> to return the group of available options for subtitles in various languages and for various purposes</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><a href="avmediacharacteristic/visual.md">@@TOKEN_0@@</a> to return the group of available options for video media</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>completionHandler</code>: 시스템이 로드 요청 완료 후 호출하는 콜백입니다. 이 콜백에는 다음 매개변수가 전달됩니다: - **mediaSelectionGroup**: 로드된 미디어 선택 그룹이며, 사용 가능한 그룹이 없거나 오류가 발생하면 <code>nil</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005">**error**: 요청이 실패한 경우의 오류 객체입니다. 그렇지 않으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static var allMediaSelections: AVAsyncProperty&lt;Root, [AVMediaSelection]&gt;](avpartialasyncproperty/allmediaselections.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산에 대한 사용 가능한 미디어 선택입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avpartialasyncproperty/preferredmediaselection.md">static var preferredMediaSelection: AVAsyncProperty&lt;Root, AVMediaSelection&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">자산의 미디어 선택 그룹에 대한 기본 미디어 선택입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static var availableMediaCharacteristicsWithMediaSelectionOptions: AVAsyncProperty&lt;Root, [AVMediaCharacteristic]&gt;](avpartialasyncproperty/availablemediacharacteristicswithmediaselectionoptions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">미디어 선택 옵션을 제공하는 미디어 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasset/loadmediaselectiongroup(for:completionhandler:">Apple Developer에서 보기</a>)*</span>
