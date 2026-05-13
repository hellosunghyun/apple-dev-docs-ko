---
source_path: "documentation/AVFoundation/avcapturestillimageoutput/preparetocapturestillimagebracket-fromwithsettingsarraycompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/preparetocapturestillimagebracket-fromwithsettingsarraycompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0000:0001">prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0002:0001">Allows the receiver to prepare resources in advance of capturing a still image bracket.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetocapturestillimagebracketfromwithsettingsarraycompletionhandler:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func prepareToCaptureStillImageBracket(from connection: AVCaptureConnection, withSettingsArray settings: [AVCaptureBracketedStillImageSettings], completionHandler handler: @escaping (Bool, (any Error)?) -> Void)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Before taking a still image bracket, additional resources may need to be allocated.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Desk View가 Dock에 있는 경우 이 메서드는 앱을 열고 전면으로 가져옵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>connection</code>: The connection through which the still image bracket should be captured.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>settings</code>: An array of <a href="avcapturebracketedstillimagesettings.md">@@TOKEN_1@@</a> objects. All the array items must be of the same <a href="avcapturebracketedstillimagesettings.md">@@TOKEN_2@@</a> subclass, or an <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_3@@</a> exception is thrown.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>handler</code>: A user provided block that will be called asynchronously once resources have successfully been allocated for the specified bracketed capture operation. The block has two parameters: - **prepared**: If sufficient resources could not be allocated, this parameter is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>, and the <code>error</code> parameter contains a non-<code>nil</code> error value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004">**error**: The value is non-<code>nil</code> if an error is encountered. If the count of the <code>settings</code> parameter exceeds <a href="avcapturestillimageoutput/maxbracketedcapturestillimagecount.md">@@TOKEN_2@@</a>, then <code>AVErrorMaximumStillImageCaptureRequestsExceeded</code> is returned. You should not assume that the completion handler will be called on a specific thread.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturestillimageoutput/capturestillimageasynchronously(from:completionhandler:">func captureStillImageAsynchronously(from: AVCaptureConnection, completionHandler: (CMSampleBuffer?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Initiates a still image capture and returns immediately.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func captureStillImageBracketAsynchronously(from: AVCaptureConnection, withSettingsArray: [AVCaptureBracketedStillImageSettings], completionHandler: (CMSampleBuffer?, AVCaptureBracketedStillImageSettings?, (any Error)?) -&gt; Void)](avcapturestillimageoutput/capturestillimagebracketasynchronously(from:withsettingsarray:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Captures a still image bracket.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturestillimageoutput/maxbracketedcapturestillimagecount.md">var maxBracketedCaptureStillImageCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Specifies the maximum number of still images that may be taken in a single bracket.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturestillimageoutput/islensstabilizationduringbracketedcapturesupported.md">var isLensStabilizationDuringBracketedCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturestillimageoutput/islensstabilizationduringbracketedcaptureenabled.md">var isLensStabilizationDuringBracketedCaptureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/preparetocapturestillimagebracket(from:withsettingsarray:completionhandler:">View on Apple Developer</a>)*</span>
