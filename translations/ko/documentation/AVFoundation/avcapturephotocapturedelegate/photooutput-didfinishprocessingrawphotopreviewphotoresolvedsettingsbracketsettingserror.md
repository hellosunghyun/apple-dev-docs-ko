---
source_path: "documentation/AVFoundation/avcapturephotocapturedelegate/photooutput-didfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput-didfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0000:0001">photoOutput(_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0002:0001">delegate에 RAW 형식의 캡처된 이미지를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:photooutputdidfinishprocessingrawphotopreviewphotoresolvedsettingsbracketsettingserror:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingRawPhoto rawSampleBuffer: CMSampleBuffer?, previewPhoto previewPhotoSampleBuffer: CMSampleBuffer?, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings?, error: (any Error)?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드를 사용해 RAW 형식 캡처의 결과를 받습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">(RAW와 처리 형식으로 모두 캡처를 요청하면 photo output이 이 메서드와 <a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:previewphoto:resolvedsettings:bracketsettings:error:">@@TOKEN_0@@</a>.md) 메서드를 모두 호출합니다.)</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: RAW 형식으로 캡처를 요청하는 경우 이 메서드 또는 <a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">@@TOKEN_0@@</a>.md) 메서드 중 하나를 구현해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">photo output은 <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드를 호출할 때 이 요구 사항을 검증하며, delegate가 올바른 메서드를 구현하지 않은 경우 photo output이 예외를 발생시킵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">RAW 형식 캡처를 요청하면 photo output은 캡처 요청의 각 노출마다 이 메서드를 한 번씩 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">단일 이미지 캡처를 요청하면 이 메서드는 한 번 호출됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">If you request a bracketed capture with multiple exposures, this method is called once for each exposure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>output</code>: The photo output performing the capture.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>rawSampleBuffer</code>: A sample buffer containing the captured RAW image. The format of this buffer matches the format you requested for the RAW image (see the <a href="avcapturephotosettings/rawphotopixelformattype.md">@@TOKEN_1@@</a> property of your photo settings). If an error prevented successful capture, this parameter is <code>nil</code>—see the <code>error</code> parameter for a description of the failure.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>previewPhotoSampleBuffer</code>: If you requested a thumbnail-sized version of the photo (with the <a href="avcapturephotosettings/previewphotoformat.md">@@TOKEN_1@@</a> property of your photo settings object), a sample buffer containing the thumbnail photo in the requested format. If you did not request preview delivery, or if an error prevented capture, this parameter is <code>nil</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>resolvedSettings</code>: An object describing the settings used for this capture. Match this object’s <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_1@@</a> value to the <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_2@@</a> property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>bracketSettings</code>: If you requested a bracketed capture of multiple images with a <a href="avcapturephotobracketsettings.md">@@TOKEN_1@@</a>, a bracketed still image settings object describing which image in the bracket this delegate call corresponds to. If you did not request bracketed capture, this parameter is <code>nil</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0006"><code>error</code>: If an the capture process could not proceed successfully, an error object describing the failure; otherwise, <code>nil</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">func photoOutput(AVCapturePhotoOutput, didFinishProcessingPhoto: AVCapturePhoto, error: (any Error)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다른 앱의 주요 오디오가 시작 및 중단될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/setallowhapticsandsystemsoundsduringrecording(_:">func setAllowHapticsAndSystemSoundsDuringRecording(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 입력으로 녹음할 때 시스템 사운드와 햅틱이 재생되는지 여부를 나타내는 Boolean 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessinglivephototomoviefileat:duration:photodisplaytime:resolvedsettings:error:">func photoOutput(AVCapturePhotoOutput, didFinishProcessingLivePhotoToMovieFileAt: URL, duration: CMTime, photoDisplayTime: CMTime, resolvedSettings: AVCaptureResolvedPhotoSettings, error: (any Error)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Provides the delegate the movie file URL resulting from a Live Photo capture.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishcapturingdeferredphotoproxy:error:">func photoOutput(AVCapturePhotoOutput, didFinishCapturingDeferredPhotoProxy: AVCaptureDeferredPhotoProxy?, error: (any Error)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Tells the delegate when the system finishes capturing the photo proxy.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:previewphoto:resolvedsettings:bracketsettings:error:">func photoOutput(AVCapturePhotoOutput, didFinishProcessingPhoto: CMSampleBuffer?, previewPhoto: CMSampleBuffer?, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings?, error: (any Error)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Provides the delegate a captured image in a processed format (such as JPEG).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessingrawphoto:previewphoto:resolvedsettings:bracketsettings:error:">View on Apple Developer</a>)*</span>
